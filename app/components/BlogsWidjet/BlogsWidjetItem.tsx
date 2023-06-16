import { blogType } from '@/options/types'
import Link from 'next/link'
import styles from './BlogsWidjet.module.scss'

interface BlogsWidjetItem {
  el: blogType
}

const BlogsWidjetItem: React.FC<BlogsWidjetItem> = ({ el }) => {
  return (
    <div className={`col-12 col-md-4 ${styles.BlogsWidjetGrid}`}>
      <div className={styles.BlogsWidjetItem}>
        <div className={styles.BlogsWidjetContent}>
          <div className={styles.BlogsWidjetTitle}>
            <Link href={`/blog/${el.slug}`}>{el.title}</Link>
          </div>
          <div dangerouslySetInnerHTML={{__html: el.short!}}></div>
        </div>
      </div>
    </div>
  )
}

export default BlogsWidjetItem