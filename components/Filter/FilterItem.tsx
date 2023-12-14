import { FilterName, FilterSection, FilterSectionBody } from "./FilterStyles"

interface IFilterItem {
  children: React.ReactNode
  title?: string
}

const FilterItem: React.FC<IFilterItem> = ({ children, title }) => {
  return (
    <FilterSection>
      {title && <FilterName>{title}</FilterName>}
      <FilterSectionBody>
        {children}
      </FilterSectionBody>
    </FilterSection>
  )
}

export default FilterItem
