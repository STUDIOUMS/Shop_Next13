import React from "react"

interface IFormField {
  type: 'text' | 'tel' | 'email' | 'area'
  label?: string
  value?: string
  place: string
  text?: string
  func?: any
  error?: string
}

const FormField: React.FC<IFormField> = ({ func, place, type, label, value = "", text, error }) => {
  const classInput = error ? 'form-control error' : 'form-control'

  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}

      {type !== 'area' ?
        <input
          type={type}
          defaultValue={value}
          placeholder={place}
          className={classInput}
          {...func}
        /> :
        <textarea placeholder={place} className={classInput}></textarea>
      }

      {text && <div className="form-text mb-1">{text}</div>}
      
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  )
}

export default FormField