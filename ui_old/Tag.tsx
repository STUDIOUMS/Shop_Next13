import { styled } from "styled-components"

interface ITag {
  type: 'hit' | 'new' | 'sale'
}

// Styles
const TagBox = styled.span`
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-family: var(--font2);
  line-height: 16px;
  padding: 4px 8px 3px;
  display: block;
  margin: 0 0 4px;
  &.hit {background: #f48216;}
  &.sale {background: #e13535;}
  &.new {background: var(--color-success);}
`

const Tag: React.FC<ITag> = ({ type }) => {
  return (
    <TagBox className={type}>{type}</TagBox>
  )
}

export default Tag