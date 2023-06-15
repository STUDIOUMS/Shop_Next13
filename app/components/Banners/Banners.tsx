import styles from './Banners.module.scss'

const Banners: React.FC = () => {
  return (
    <div className={styles.homebanners}>
      <div className="row">
        <div className="col-12 col-md-6">
          <a href="#" className={styles.homebanner}></a>
        </div>
        <div className="col-12 col-md-6">
          <a href="#" className={styles.homebanner}></a>
        </div>
        <div className="col-12 col-md-4">
          <a href="#" className={styles.homebanner}></a>
        </div>
        <div className="col-12 col-md-4">
          <a href="#" className={styles.homebanner}></a>
        </div>
        <div className="col-12 col-md-4">
          <a href="#" className={styles.homebanner}></a>
        </div>
      </div>
    </div>
  )
}

export default Banners