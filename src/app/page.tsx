import { permanentRedirect } from 'next/navigation'

const page = () => {
  permanentRedirect("/login")
}

export default page