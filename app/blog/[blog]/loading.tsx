import { Skelet } from "@/components/UI/Skelet"

export default function Loading() {
  return (
    <div className="section">
      <Skelet $width="button" $margin="big" />
      <div className="section">
        <Skelet $size="h1" $width="text" $margin="big" />
      </div>
      <Skelet $size="button" $margin="big" />

      <Skelet $size="line" />
      <Skelet $size="line" $width="title" />
      <Skelet $size="line" $width="title" />
      <Skelet $size="line" $width="title" />
      <Skelet $size="line" $width="title" />
      <Skelet $size="line" $width="title" $margin="big" />
    </div>
  )
}