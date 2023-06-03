import styles from "./components/Blog.module.scss"

export default function Loading() {
  return <div className="placeholder-glow">
    <div className="breadcrumb">
      <span className="placeholder col-2"></span>
      <span className="placeholder col-2"></span>
      <span className="placeholder col-2"></span>
    </div>
    <h1>
      <span className="placeholder col-3"></span>
    </h1>
    
    <div className={styles.blogItem}>
      <h2><span className="placeholder col-12"></span></h2>
      <div className={styles.blogDate}><span className="placeholder col-3"></span></div>
      <div className={styles.blogShort}>
        <span className="placeholder col-12"></span>
        <span className="placeholder col-8"></span>
        <span className="placeholder col-5"></span>
      </div>
    </div>

  </div>
}