import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <main className={styles.main}>
        <Image src='/404.svg' width={600} height={450} alt='' />
        <div className='flex flex-col gap-4'>
          <h1 className='text-gray-300 font-bold text-2xl'>
            Ooops! The page you&apos;re looking for was not found
          </h1>
          <Link href='/'>
            <div className='group bg-gray-800 text-center rounded-full p-4 w-1/2 mx-auto text-lg font-bold cursor-pointer hover:brightness-110 transition-all'>
              <a className='group-hover:underline'>Return Home</a>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}
