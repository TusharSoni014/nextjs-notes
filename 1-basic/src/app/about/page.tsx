import Link from 'next/link'
import React from 'react'

export default function About() {
  // throw new Error("")
  return (
    <div>
      about page
      <br />
      <Link className=' block text-blue-500' href="/">Home page</Link>
    </div>
  )
}
