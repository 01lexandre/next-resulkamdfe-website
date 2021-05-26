import React from 'react'
import { Container, Navtop } from '../styles/pages/Home'
import { motion } from 'framer-motion'

import LResulkaMDFE from '../assets/resulka-mdfe.svg'

const SectionNavTop: React.FC = () => {
  return (
    <motion.div
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.51 }}
    >
      <Navtop>
        <Container>
          <div>
            <LResulkaMDFE />
            <small>
              Emissor de Manifesto de Documentos Fiscais Eletrônicos
            </small>
          </div>
          <div>
            <a
              href="https://blog.resulkamdfe.com.br/"
              className={'btn-out-primary'}
              rel="noopener noreferrer"
              target={'_blank'}
            >
              Blog
            </a>
            <a
              href="https://materiais.freenfe.com.br/seja-um-parceiro"
              rel="noopener noreferrer"
              target={'_blank'}
              className={'btn-out-primary'}
            >
              Seja um Parceiro
            </a>
            <button className={'btn-primary'}>Teste Grátis</button>
          </div>
        </Container>
      </Navtop>
    </motion.div>
  )
}

export default SectionNavTop
