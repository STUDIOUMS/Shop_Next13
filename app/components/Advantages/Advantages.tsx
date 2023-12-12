'use client'

import truck from '@/assets/truck.svg'
import warehouse from '@/assets/warehouse.svg'
import manager from '@/assets/manager.svg'
import Image from 'next/image'
import styled from 'styled-components'
import SCRegistry from '@/options/registry'

interface IAdvantages {
  title?: string
}

// Styles
const Wrap = styled.div``
const Item = styled.div`
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  color: var(--color-text2);
  padding: var(--gap);
  text-align: center;
  img { margin-bottom: var(--pb); }
  @media screen and (max-width: 720px) {
    align-items: center;
    display: flex;
    text-align: left;
    img { margin: 0 20px 0 0; max-width: 40px; }
  }
`
const Title = styled.div`
  color: var(--color-text);
  font-weight: 600;
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 22px;
  @media screen and (max-width: 720px) {
    margin: 0 0 4px;
  }
`
const ItemText = styled.div`

`

const Advantages: React.FC<IAdvantages> = ({ title = 'Преимущества' }) => {
  return (
    <Wrap className="section">
      <div className="pagetitle">{title}</div>
      <div className="grid grid-3 grid-mb-1">
        <Item>
          <Image src={truck} alt="" height={50} />
          <ItemText>
            <Title>Бесплатная доставка</Title>
            до вашего склада или терминала ТК
          </ItemText>
        </Item>
        <Item>
          <Image src={warehouse} alt="" height={50} />
          <ItemText>
            <Title>В наличии на складе</Title>
            весь ассортимент продукции серии &ldquo;Ника&rdquo;
          </ItemText>
        </Item>
        <Item>
          <Image src={manager} alt="" height={50} />
          <ItemText>
            <Title>Выделенный менеджер</Title>
            Помощь в выборе средств для конкретного предприятия
          </ItemText>
        </Item>
      </div>
    </Wrap>
  )
}

export default Advantages