import { permanentRedirect } from 'next/navigation'
import React from 'react'

const page = () => {
  permanentRedirect("/home")
}

export default page