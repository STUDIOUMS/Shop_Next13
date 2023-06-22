import { createArray } from "@/options/helpers"

export default function Loading() {
  const list = createArray(3)

  return <div className="placeholder-glow">
    <div className="breadcrumb">
      <span className="placeholder col-2"></span>
      <span className="placeholder col-2"></span>
      <span className="placeholder col-2"></span>
    </div>
    <h1>
      <span className="placeholder col-3"></span>
    </h1>
    {list.map(el => (
      <div key={el} style={{marginBottom: '30px'}}>
        <h2><span className="placeholder col-12"></span></h2>
        <p><span className="placeholder col-12"></span><br />
        <span className="placeholder col-8"></span><br />
        <span className="placeholder col-5"></span></p>
      </div>
    ))}
  </div>
}