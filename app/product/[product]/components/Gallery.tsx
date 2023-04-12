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
    </div>
  )
}

export default Gallery