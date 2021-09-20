import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../layouts/Default'
import '../assets/styles/globals.css'

const Chart = dynamic(() => import('../components/chart/index'), { ssr: false })
function MyApp() {
  return (
    <div>
      <Layout>
        <Chart />
      </Layout>
    </div>
  )
}

export default MyApp
