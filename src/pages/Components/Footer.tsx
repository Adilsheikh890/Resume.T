import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-teal-600 h-100">
      <h1 className="pt-10 font-autograph text-4xl mb-5 text-center">Muhammad Adil</h1>
      <div>
        <ol className="flex mb-5 justify-center gap-8 text-center text-white font-semibold">
          <Link href="/"><li>Home</li></Link>
          <Link href="#about"><li>About</li></Link>
          <Link href="#skill"><li>Skill</li></Link>
          <Link href="#portfolio"><li>Portfolio</li></Link>
          <Link href="#contact"><li>Contact</li></Link>
        </ol>
      </div>
      <div className="flex justify-center gap-10 pb-10">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={30} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={30} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={30} /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={30} /></a>
      </div>
    </footer>
  )
}
