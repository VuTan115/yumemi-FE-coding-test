import React from 'react'
import Head from 'next/head'

// eslint-disable-next-line react/prop-types
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
