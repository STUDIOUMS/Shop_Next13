import Image from "next/image"
import facebook from "@/assets/facebook.svg"
import instagram from "@/assets/instagram.svg"
import twitter from "@/assets/twitter.svg"
import vk from "@/assets/vk.svg"
import { styled } from "styled-components"

// Styles
const List = styled.div`
  display: flex;
`
const Item = styled.a`
  align-items: center;
  background: var(--color-light);
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
  height: 40px;
  margin: 0 4px 0 0;
  width: 40px;
  transition: all 200ms ease-in-out;
  &:hover { background: #d1d1d1; }
  &:last-child { margin: 0; }
`

const Socials: React.FC = () => {
  return (
    <List>
      <Item href="/" target="_blank">
        <Image src={facebook} alt="Facebook" width={20} height={20}></Image>
      </Item>
      <Item href="/" target="_blank">
        <Image src={instagram} alt="Instagram" width={20} height={20}></Image>
      </Item>
      <Item href="/" target="_blank">
        <Image src={twitter} alt="Twitter" width={20} height={20}></Image>
      </Item>
      <Item href="https://vk.com/alba_higo" target="_blank">
        <Image src={vk} alt="Vk" width={20} height={20}></Image>
      </Item>
    </List>
  )
}

export default Socials
