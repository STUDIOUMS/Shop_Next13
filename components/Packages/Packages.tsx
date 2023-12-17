import { RelatedPacksType } from '@/options/types'
import { styled } from 'styled-components'
import Package from './Package'

interface IPackages {
  currentPackID: number
  handler: (id: number, name: string) => void
  packs: RelatedPacksType[]
  title?: string
}

// Styles
const PacksList = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 4px 0 0;
  &:last-child {margin: 0;}
`
const PacksListTitle = styled.div`
  margin: 0 0 8px;
`
const PacksListRow = styled.div`
  display: flex;
`

const Packages: React.FC<IPackages> = ({ currentPackID, handler, packs, title = 'Фасовка' }) => {
  return (
    <PacksList>
      <PacksListTitle>{title}:</PacksListTitle>
      <PacksListRow>
        {packs.map((el) => (
          <Package
            key={el.id}
            active={currentPackID === el.id}
            title={el.pack.name}
            value={el.id}
            handler={handler}
          />
        ))}
      </PacksListRow>
    </PacksList>
  )
}

export default Packages