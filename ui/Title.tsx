import { styled } from "styled-components"

interface ITitle {
  children: React.ReactNode
  title: string
}

// Styles
const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 var(--gap);
  h1 { margin: 0; }
  @media screen and (max-width: 540px) {
    display: block;
    h1 { margin: 0 0 var(--gap); }
  }
`

const Title: React.FC<ITitle> = ({ children, title }) => {
  return (
    <Head>
      <h1>{title}</h1>
      {children}
    </Head>
  )
}

export default Title
