import { createArray } from "@/options/helpers"
import { Skelet } from "@/components/UI/Skelet"

export default function Loading() {
  const list = createArray(3)

  return (
    <div className="section">
      <Skelet $width="button" $margin="big" />
      <div className="section">
        <Skelet $size="h1" $width="text" $margin="big" />
      </div>
      {list.map(el => <div key={el} className="section">
        <Skelet />
        <Skelet $size="line" $width="title" />
        <Skelet $size="line" $width="title" />
        <Skelet $size="line" $width="title" />
      </div>)}
    </div>
  )
}