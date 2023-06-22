import { createArray } from "@/options/helpers"

export default function Loading() {
  const list = createArray(6)

  return <div className="placeholder-glow">
    <div className="breadcrumb">
      <span className="placeholder col-2"></span>
      <span className="placeholder col-2"></span>
      <span className="placeholder col-2"></span>
    </div>
    <h1>
      <span className="placeholder col-3"></span>
    </h1>
    <div className="row">
      <div className="col-12 col-lg-3 d-none d-lg-block">
        <div className="placeholder col-12" style={{height: '400px'}}></div>
      </div>
      <div className="col-12 col-lg-9">
        <div className="row mb-3">
          <div className="col-4">
            <div className="placeholder col-12" style={{height: '70px'}}></div>
          </div>
          <div className="col-4">
            <div className="placeholder col-12" style={{height: '70px'}}></div>
          </div>
          <div className="col-4">
            <div className="placeholder col-12" style={{height: '70px'}}></div>
          </div>
        </div>

        <div className="row">
          {list.map(el => (
            <div key={el} className="col-12 col-sm-6 col-md-4">
              <div className="placeholder col-12 mb-3" style={{height: '260px'}}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}