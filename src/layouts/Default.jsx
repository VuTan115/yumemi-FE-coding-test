import React from 'react'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/logo_yumemi.svg" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
