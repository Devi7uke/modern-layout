import Ribbon from '@/components/Ribbon'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

import { Montserrat_Alternates, Lora } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'


import '@fortawesome/fontawesome-free/css/all.min.css'
import SideBar from '@/components/SideBar'


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
    let isLogin = router.asPath === '/login'
    return (
        <>
            { isLogin ? null : <SideBar /> }
            <div className={`${montserrat.variable} ${lora.variable} font-mont ${isLogin ? null : 'ml-24 lg:ml-16 md:ml-10 max-w-full'}`}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Ribbon />
                <AnimatePresence mode='wait'>
                    <main className={`bg-light w-full min-h-screen`}>
                        <Component key={router.asPath} {...pageProps} />
                    </main>
                </AnimatePresence>
                { isLogin ? null : <Footer /> }
            </div>
        </>
    )
}