import { Skelet } from "@/app/components/Skelet";

export default function Loading() {
  return <div>
    <Skelet />
    <Skelet $size="h1" />
    <div className="grid grid-2 grid-mb-1 section">
      <div>
        <Skelet style={{height: '300px'}} />
      </div>
      <div>
        <p><Skelet $size="line" /></p>
        <p><Skelet /></p>
        <p><Skelet $size="line" /></p>
        <p><Skelet /></p>
        <p><Skelet $size="button" /></p>
        <p><Skelet $size="line" /></p>
        <p><Skelet $size="line" /></p>
        <p><Skelet $size="line" /></p>
      </div>
    </div>
    <p><Skelet $size="button" /></p>
    <p><Skelet $size="line" /></p>
    <p><Skelet $size="line" /></p>
    <p><Skelet $size="line" /></p>
    <p><Skelet $size="line" /></p>
  </div>
}