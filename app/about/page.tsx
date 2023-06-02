import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "../components/BreadCrumbs"

// Metatags
export const metadata = {
  title: 'О компании',
  description: 'О компании',
}

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "О компании", slug: "about" }
]

export default async function About() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>О компании</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa natus alias impedit itaque unde fugit vel quasi, totam veritatis voluptates reiciendis incidunt, soluta eveniet commodi minus cupiditate dolore aliquam, nulla officiis officia corporis. Doloribus dolorum necessitatibus officia, natus numquam dignissimos. Nobis ducimus nulla minus enim, accusamus, necessitatibus accusantium tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus esse voluptatum ea quibusdam beatae aspernatur recusandae minus, quam earum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor labore debitis aperiam eligendi officia soluta reprehenderit explicabo accusantium, quas dignissimos possimus sed temporibus architecto fugit similique enim illo? Autem dolor dicta asperiores ad alias, earum ipsam sapiente debitis quidem?</p>
    </div>
  )
}
