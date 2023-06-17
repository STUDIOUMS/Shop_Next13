import styles from './Banners.module.scss'

interface IBanners {
  count?: number
}

const Banners: React.FC<IBanners> = ({ count = 2 }) => {
  const list: any[] = []
  const gridGap = 12 / count
  
  for (let i = 0; i < count; i++) {
    list.push(i)
  }

  return (
    <div className={styles.homebanners}>
      <div className="row">
        {list.map(el => {
          return <div className={`col-12 col-md-${gridGap} ${styles.homebannerGrid}`} key={el}>
            <a href="#" className={styles.homebanner}></a>
          </div>
        })}
      </div>
    </div>
  )
}

export default Banners