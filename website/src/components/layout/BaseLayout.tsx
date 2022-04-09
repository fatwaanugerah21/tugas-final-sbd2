import Head from 'next/head'
import React from 'react'

interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children, ...props }) => {
  return (
    <div>
      <Head>
        <title>Tugas Final SBD2</title>
      </Head>

      <div className={`bg-red w-full`}>Mantuds</div>
      {children}
    </div>
  )
}
export default BaseLayout
