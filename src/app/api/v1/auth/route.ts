import { NextRequest } from "next/server";

const externalService = async (): Promise<{ access_token: string }> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        access_token:
          "asdadlñdnkvwjqnq42384u23894u234jnuh48293u4'283h12u5bu2n582534u2042903423412834",
      });
    }, 2000);
  });
};

export async function POST(request: NextRequest) {
  const { access_token } = await externalService();
  request.cookies.set("auth", access_token);

  return Response.json({ success: true });
}
