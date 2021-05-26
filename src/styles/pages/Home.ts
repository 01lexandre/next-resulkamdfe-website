import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1220px;
  }
`

export const Navtop = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 0;
  color: white;
  text-align: center;
  svg {
    width: 270px;
    path {
      fill: white;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 350px) {
      svg {
        width: 100%;
      }
    }
    @media only screen and (max-width: 880px) {
      flex-direction: column;
      justify-content: center;
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
  a.btn-out-primary {
    padding: 5px 16px;
    margin: 5px !important;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    border: 2px solid ${props => props.theme.colors.white};
    border-radius: 3rem;
    font-weight: 500;
    &:hover {
      background-color: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const SectionContainerHero = styled(motion.section)`
  min-height: 60vh;
  padding: 0 1.7rem;

  background-image: url('/image/f2726af.png');
  background-size: cover;
  background-position: center center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;

  h1 {
    font-size: 2.2rem;
  }
  button {
    margin-top: 2rem;
  }
`

export const SectionContainerDetail = styled(motion.section)`
  position: relative;
  overflow: hidden;

  padding-top: 3rem;
  padding-bottom: 3rem;
  svg[class='detail'] {
    position: absolute;
    z-index: 0;
    left: -611px;
    top: 0;
  }
  div {
    z-index: 1;
    position: relative;
    h2 {
      color: ${props => props.theme.colors.secondary};
    }
    div[class='last-child'] {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 3rem;
      strong {
        margin-bottom: 1.5rem;
      }
    }
  }
`

export const ListDetail = styled(motion.ul)`
  margin-top: 2rem;

  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
  li {
    border-radius: 1rem;
    background-color: white;
    padding: 1.7rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      width: 100px;
    }
  }
`
