'use client'

import SCRegistry from '@/options/registry'
import { CatType } from '@/options/types'
import Link from 'next/link'
import { styled } from 'styled-components'

interface ISubCats {
  list: CatType[]
}

// Styles
const List = styled.div`
  grid-column-gap: calc(var(--gap) / 2);
  grid-row-gap: 0;
  margin-bottom: var(--gap);
`
const Item = styled(Link)`
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  display: block;
  padding: 10px 16px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #000;
  text-decoration: none;
  min-height: 100%;
  transition: all 200ms ease-in-out;
  &:hover {box-shadow: 0 2px 8px rgba(0,0,0,0.25);}
  img {display: block; width: 40px; object-fit: cover; height: 40px; margin: 0 auto 10px;}
  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`

const SubCats: React.FC<ISubCats> = ({ list }) => {
  return (
    <SCRegistry>
      <List className="grid grid-4 grid-tb-3">
        {list.map(el => (
          <div key={el.id}>
            <Item href={`/cat/${el.slug}`}>
              <img src={el.img} alt="" />
              <span>{el.name}</span>
            </Item>
          </div>
        ))}
      </List>
    </SCRegistry>
  )
}

export default SubCats