import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <h1>Hello World</h1>
    </div>

  )
}
