import BaseLayout from '@components/layout/BaseLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        Mantul
      </main>
    </div>
  )
}

;(Home as any).Layout = BaseLayout

export default Home