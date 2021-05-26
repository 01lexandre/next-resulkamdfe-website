import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import SectionNavTop from '../section/SectionNavTop'
import SectionHero from '../section/SectionHero'
import SectionDetail from '../section/SectionDetail'

interface RespProps {
  product: any
  startDownload: any
}
const Home: React.FC<RespProps> = ({ product, startDownload }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>
          Emissor de Manifesto de Documentos Fiscais Eletrônicos - ResulkaMDFe
        </title>
      </Head>
      <SectionNavTop />
      <SectionHero startDownload={startDownload} />
      <SectionDetail startDownload={startDownload} />
      <h1>{product.name}</h1>
    </motion.div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(
    'https://api.srvco.re/v1/startup/e579e120-f3da-11e8-87e9-3179352d0e80/products?include=prices&search=code:resulka-mdfe'
  ).then(response => response.json())
  resp.data[0].prices = resp.data[0].prices.data.reverse()
  return {
    props: {
      product: resp.data[0]
    },
    revalidate: 60
  }
}
