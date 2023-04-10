import styles from './Card.module.scss'

interface ICatSkelets {
  num?: number
}

const CatSkelets: React.FC<ICatSkelets> = ({ num = 4 }) => {
  const list = [...Array(num)]
  return (
    <div className="row">
      {list.map((_, index) => (
        <div className="col-12 col-md-6 col-xl-3 mb-3" key={index}>
          <div className={styles.good}>
            <div className="placeholder-glow">
              <h5><div className="placeholder col-12" style={{height: '100px'}}></div></h5>
              <div className="placeholder col-12"></div>
              <div className="placeholder col-12"></div>
              <div className="placeholder col-4"></div><br />
              <div className="placeholder col-6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatSkelets