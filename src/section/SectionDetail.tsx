import React from 'react'
import { motion } from 'framer-motion'
import {
  SectionContainerDetail,
  Container,
  ListDetail
} from '../styles/pages/Home'

import IconDetail from '../assets/40612fb.svg'
import IconImpre from '../assets/5c5b639.svg'
import IconPaper from '../assets/1b25549.svg'
import IconPen from '../assets/f87fb0b.svg'
import IconDown from '../assets/fe61cff.svg'

type Props = {
  startDownload: any
}
const SectionDetail: React.FC<Props> = ({ startDownload }) => {
  return (
    <SectionContainerDetail
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <IconDetail />
      <Container>
        <h2>
          É uma solução simples e completa para você evitar dores de cabeça ao
          emitir seus Manifestos eletrônicos.
        </h2>
        <p>
          Sua simplicidade e praticidade traz recursos que te ajudam no dia a
          dia, como importar NFe e CTe, por exemplo. <br />O emissor é ideal
          para empresas de pequeno porte que precisam se enquadrar as leis
          impostas pelo governo.
        </p>
        <ListDetail>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.02 }}>
            <IconImpre />
            <div>
              <h3>Emissão de MDFe</h3>
              <p>
                Emita de forma fácil e ilimitada todos os Manifestos que forem
                necessários.
              </p>
            </div>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.02 }}>
            <IconPaper />
            <div>
              <h3>Consulta de Manifestos não encerrados</h3>
              <p>
                Consulte todos os seus Manifestos não encerrados, e se for
                necessário, encerre-os.
              </p>
            </div>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.02 }}>
            <IconPen />
            <div>
              <h3>Cadastros</h3>
              <p>
                Tenha pronto para uso os cadastros de seus Motoristas e
                Veículos.
              </p>
            </div>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.02 }}>
            <IconDown />
            <div>
              <h3>Importação de XML</h3>
              <p>
                Confeccione o MDF-e através da importação, tanto da NF-e quanto
                do CT-e e ganhe tempo.
              </p>
            </div>
          </motion.li>
        </ListDetail>
        <div className={'last-child'}>
          <strong>Não perca tempo, conheça agora!</strong>
          <motion.button className={'btn-primary'} onClick={startDownload}>Teste Grátis</motion.button>
        </div>
      </Container>
    </SectionContainerDetail>
  )
}

export default SectionDetail
