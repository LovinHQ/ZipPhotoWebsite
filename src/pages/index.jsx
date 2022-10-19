import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>ZipPhoto - The photo organizer you&rsquo;ll enjoy using.</title>
        <meta
          name="description"
          content="Clear the unused and find the wanted easily. ZipPhoto is the ultimate solution for photos on your iPhone."
        />
      </Head>
      {/*<Header />*/}
      <main className="h-full" >
        {/*<Hero />*/}
        {/*<PrimaryFeatures />*/}
        {/*<SecondaryFeatures />*/}
        <CallToAction />
        {/*<Reviews />*/}
        {/*<Pricing />*/}
        {/*<Faqs />*/}
      </main>
      {/*<Footer />*/}
    </>
  )
}
