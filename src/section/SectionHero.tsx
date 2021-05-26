import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainerHero } from '../styles/pages/Home'

interface Props {
  startDownload: any
}
const SectionHero: React.FC<Props> = ({ startDownload }) => {
  return (
    <SectionContainerHero
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.51 }}
    >
      <motion.h1
        exit={{ opacity: 0, y: -10 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Emissor de Manifesto Eletrônico <br />
        de Documentos Fiscais (MDF-e)
      </motion.h1>
      <motion.p
        exit={{ opacity: 0, y: -10 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05 }}
      >
        Faça agora o teste gratuito!
      </motion.p>
      <motion.button
        exit={{ opacity: 0, y: -10 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25 }}
        className={'btn-primary'}
        onClick={startDownload}
      >
        Fazer download
      </motion.button>
    </SectionContainerHero>
  )
}
export default SectionHero
