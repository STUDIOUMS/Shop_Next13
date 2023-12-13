import { Skelet } from "@/app/components/UI/Skelet"
import { createArray } from "@/options/helpers"

export default function Loading() {
  const list = createArray(8)

  return <div>
    <Skelet />
    <Skelet $size="h1" />
    <div className="grid grid-4 grid-tb-3 grid-mb-1 goodlist">
      {list.map(el => (
        <div key={el}>
          <Skelet style={{height: '260px'}} $margin="none" />
        </div>
      ))}
    </div>
  </div>
}