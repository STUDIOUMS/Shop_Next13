import styles from './Gallery.module.scss'

interface IGallery {
  images: string[]
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryBig}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.galleryThumbs}>
        <div className="row row-sm">
          {images.map(img => (
            <div key={img} className="col-4">
              <a href="#" className={styles.galleryThumbsItem}><img src={img} /></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery