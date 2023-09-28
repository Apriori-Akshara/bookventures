import Head from 'next/head'
import { Inter } from 'next/font/google'
import Topcomponent from '../components/homepage/topcomponent'
import Herosection from '../components/homepage/herosection'
import Reading from '../components/homepage/middlecomponents/reading'
import Books from '../components/homepage/middlecomponents/bookssection'
import Lower from '../components/homepage/lowercomponents/lowercomponents'
import Footer from '../components/homepage/bottomcomponent/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookventures</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Topcomponent />
        <Herosection />
        <Reading />
        <Books />
        <Lower />
        <Footer />
      </div>
    </>
  )
}
