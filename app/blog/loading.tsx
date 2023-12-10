import { createArray } from "@/options/helpers"
import { Skelet } from "../components/Skelet"

export default function Loading() {
  const list = createArray(3)

  return <div className="section">
    <Skelet />
    <h1>
      <Skelet $size="h1" />
    </h1>
    {list.map(el => (
      <div key={el} style={{marginBottom: '30px'}}>
        <Skelet $size="line" />
        <Skelet />
        <Skelet />
        <Skelet />
      </div>
    ))}
  </div>
}