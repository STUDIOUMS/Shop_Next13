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
  padding: var(--gap);
  text-align: center;
  img {margin-bottom: 20px;}
`
const Title = styled.div`
  font-weight: 600;
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 22px;
`

const Advantages: React.FC<IAdvantages> = ({ title = 'Преимущества' }) => {
  return (
    <SCRegistry>
      <Wrap className="section">
        <div className="pagetitle">{title}</div>
        <div className="grid grid-3 grid-mb-1">
          <Item>
            <Image src={truck} alt="" height={50} />
            <Title>Бесплатная доставка</Title>
            до вашего склада или терминала ТК
          </Item>
          <Item>
            <Image src={warehouse} alt="" height={50} />
            <Title>В наличии на складе</Title>
            весь ассортимент продукции серии &ldquo;Ника&rdquo;
          </Item>
          <Item>
            <Image src={manager} alt="" height={50} />
            <Title>Выделенный менеджер</Title>
            Помощь в выборе средств для конкретного предприятия
          </Item>
        </div>
      </Wrap>
    </SCRegistry>
  )
}

export default Advantages