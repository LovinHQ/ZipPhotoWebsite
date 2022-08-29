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
        <title>ZipPhoto - Organize and recapture your precious memories.</title>
        <meta
          name="description"
          content="More than an iOS photo organizer, ZipPhoto is the housekeeper of your precious memories."
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
