import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1rem -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  }
  a.btn-primary, button.btn-primary {
    border: none;
    padding: 7px 16px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    text-decoration: none;
    border-radius: 3rem;
    text-transform: uppercase;
    font: 500 16px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.dark_primary};
    }
  }
`
