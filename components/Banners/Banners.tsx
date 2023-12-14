'use client'

import { styled } from "styled-components"
import banner1 from "@/assets/banner1.webp"
import banner2 from "@/assets/banner2.webp"

interface IBanners {
  count?: number
}

// Styles
const Grid = styled.div`
  margin: 0 0 var(--section);
  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`
const Banner = styled.a`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  height: 200px;
  padding: 14px 20px;
  position: relative;
  text-decoration: none;
  &:nth-child(1) { background-image: url(${banner1.src}); }
  &:nth-child(2) { background-image: url(${banner2.src}); }
`

const Banners: React.FC<IBanners> = ({ count = 2 }) => {
  const list: any[] = []
  
  for (let i = 0; i < count; i++) {
    list.push(i)
  }

  return (
    <Grid className={`grid grid-${count}`}>
      {list.map(el => <Banner key={el} href="#" />)}
    </Grid>
  )
}

export default Banners