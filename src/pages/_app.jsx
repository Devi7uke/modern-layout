import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import { Montserrat_Alternates, Lora } from 'next/font/google'

import '@/styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Head from 'next/head'
import Ribbon from '@/components/Ribbon'
import Footer from '@/components/Footer'

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora"
})

export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className= {`${montserrat.variable} ${lora.variable} font-mont bg-light w-full`}>
                <Ribbon />
            </div>
            <main className= {`${montserrat.variable} ${lora.variable} font-mont bg-light w-full min-h-screen`}>
                
                <AnimatePresence mode='wait'>
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
            </main>
            <div className= {`${montserrat.variable} ${lora.variable} font-mont bg-light w-full`}>
                <Footer />
            </div>
        </>
    )
}