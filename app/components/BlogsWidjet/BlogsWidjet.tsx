import { blogType } from '@/options/types'
import Link from 'next/link'
import styles from './BlogsWidjet.module.scss'
import BlogsWidjetItem from './BlogsWidjetItem'

interface IBlogsWidjet {
  list: blogType[]
  title?: string
}

const BlogsWidjet: React.FC<IBlogsWidjet> = ({ list, title = 'Блог' }) => {
  return (
    <div className={styles.BlogsWidjet}>
      <div className="pagetitle">
        <Link href="/blog">{title}</Link>
      </div>
      <div className="row">
        {list.map(el => <BlogsWidjetItem key={el.id} el={el} />)}
      </div>
    </div>
  )
}

export default BlogsWidjet