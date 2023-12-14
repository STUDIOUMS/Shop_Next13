import { Skelet } from "@/components/UI/Skelet";

export default function Loading() {
  return <div>
    <Skelet />
    <Skelet $size="h1" />
    <div className="grid grid-2 grid-mb-1 section">
      <div>
        <Skelet style={{height: '300px'}} />
      </div>
      <div>
        <Skelet $size="line" />
        <Skelet />
        <Skelet $size="line" />
        <Skelet $size="button" />
        <Skelet $size="line" />
        <Skelet $size="line" />
        <Skelet $size="line" />
      </div>
    </div>
    <Skelet $size="button" />
    <Skelet $size="line" />
    <Skelet $size="line" />
    <Skelet $size="line" />
  </div>
}