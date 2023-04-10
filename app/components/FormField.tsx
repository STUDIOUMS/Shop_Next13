import React from "react"

interface IFormField {
  type: 'text' | 'tel' | 'email' | 'area'
  label?: string
  value?: string
  place: string
  text?: string
}

const FormField: React.FC<IFormField> = ({ place, type, label, value = "", text }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {type !== 'area' ?
        <input type={type} defaultValue={value} placeholder={place} className="form-control" /> :
        <textarea placeholder={place} className="form-control"></textarea>
      }
      {text && <div className="form-text mb-1">{text}</div>}
    </div>
  )
}

export default FormField