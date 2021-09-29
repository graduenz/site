import Head from 'next/head'
import Image from 'next/image'

import 'flag-icon-css/css/flag-icon.min.css'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col h-screen items-center">
      <Head>
        <title>Guilherme Augusto Raduenz - Back End Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-20 flex flex-col items-center">
        <Image
          src="/profile.png"
          alt="ugly dev"
          className="rounded-lg"
          width={96}
          height={96} />
        <p className="mt-8 text-2xl font-bold">
          Guilherme Augusto Raduenz
        </p>
        <p className="mt-1 text-md font-medium">
          Back End Software Engineer
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <p className="font-medium">
          I am a .NET Engineer, but you can know everything about me in the links above:
        </p>
        <div className="mt-10 flex flex-col space-y-2">
          <a
            href="javascript:alert('coming soon')"
            className="shadow rounded text-center text-sm font-medium px-6 py-3">
            Want my resume?
          </a>
          <a
            href="https://github.com/graduenz"
            className="shadow rounded text-center text-sm font-medium px-6 py-3">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/graduenz"
            className="shadow rounded text-center text-sm font-medium px-6 py-3">
            LinkedIn
          </a>
        </div>
        <p className="font-medium mt-10">
          Please only contact me via LinkedIn.
        </p>
        <span className="flag-icon flag-icon-br mt-4"></span>
      </div>
    </main>
  )
}
