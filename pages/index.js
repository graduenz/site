import Head from 'next/head'
import Image from 'next/image'

import 'flag-icon-css/css/flag-icon.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col h-screen items-center">
      <Head>
        <title>Guilherme Augusto Raduenz - Back End Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-20 flex flex-col items-center px-8">
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

      <div className="mt-10 flex flex-col items-center px-8">
        <p className="font-medium">
          I am a .NET Engineer and you will know anything else in the links below:
        </p>
        <div className="mt-10 flex flex-col space-y-2">
          <a
            href="javascript:alert('coming soon')"
            className="w-40 shadow rounded text-sm font-medium px-6 py-3 flex flex-row">
            <FontAwesomeIcon
              icon={faFileDownload}
              height={16}
              className="mr-4" />
            Resume
          </a>
          <a
            href="https://github.com/graduenz"
            className="shadow rounded text-sm font-medium px-6 py-3 flex flex-row">
            <FontAwesomeIcon
              icon={faGithub}
              height={16}
              className="mr-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/graduenz"
            className="shadow rounded text-sm font-medium px-6 py-3 flex flex-row">
            <FontAwesomeIcon
              icon={faLinkedin}
              height={16}
              className="mr-4" />
            LinkedIn
          </a>
        </div>
        <p className="font-medium mt-10">
          Please only contact me via LinkedIn.
        </p>
        <p className="font-medium mt-4 mb-4">
          Thanks for visiting!
        </p>
        <span className="flag-icon flag-icon-br mt-4"></span>
      </div>
    </main>
  )
}
