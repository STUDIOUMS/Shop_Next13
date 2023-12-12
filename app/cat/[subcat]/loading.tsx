import { Skelet } from "@/app/components/Skelet"
import { createArray } from "@/options/helpers"

export default function Loading() {
  const list = createArray(8)

  return <div>
    <Skelet />
    <Skelet $size="h1" />
    <div className="grid grid-4 grid-tb-1 catpage">
      <div className="catpage-left">
        <Skelet style={{height: '400px'}} />
      </div>
      
      <div className="catpage-right">
        <div className="grid grid-3 goodlist">
          <div>
            <Skelet style={{height: '70px'}} />
          </div>
          <div>
            <Skelet style={{height: '70px'}} />
          </div>
          <div>
            <Skelet style={{height: '70px'}} />
          </div>
        </div>

        <div className="grid grid-4 grid-mb-1 goodlist">
          {list.map(el => (
            <div key={el}>
              <Skelet style={{height: '260px'}} />
            </div>
          ))}
        </div>
      </div>

      <div className="catpage-description section"></div>
    </div>
  </div>
}