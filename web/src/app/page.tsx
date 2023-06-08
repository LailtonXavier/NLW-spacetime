import Image from 'next/image'
import { User } from 'lucide-react'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripers */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memorias!
          </p>
        </a>

        {/* hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="nlw spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-4xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
            rel="noreferrer"
          >
            Rocketseat
          </a>{' '}
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Vocẽ ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}