import { AppStoreLink } from '@/components/AppStoreLink'
import { FormLink} from "@/components/FormLink";
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28 h-full"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Coming soon
          </h2>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            on App Store
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Clear unused photos and find wanted photos easily. ZipPhoto is the ultimate solution for the photos on your iPhone.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Reserve and stay tuned.
          </p>
          <div className="mt-8 flex justify-center">
            <FormLink color="white"/>
          </div>
        </div>
      </Container>
    </section>
  )
}
