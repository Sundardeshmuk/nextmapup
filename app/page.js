import Image from 'next/image'
import TollsBtnOriginDestination from './TollsBtnOriginDestination/page'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>main page</h1>
     <TollsBtnOriginDestination/>
    </main>
  )
}
