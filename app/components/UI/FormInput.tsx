import styled, { css } from "styled-components"
import SCRegistry from "@/options/registry"

interface IFormInput {
  placeholder?: string
  type?: 'text' | 'email' | 'search' | 'tel' | 'password' | 'area'
  expand?: boolean
  handler: (val: string) => void
  defVal?: string
}

const InputStyles = css<{ $error?: boolean, $expand?: boolean }>`
  background: var(--color-white);
  border: 1px solid var(--color-${({ $error }) => $error ? 'danger' : 'light'});
  border-radius: var(--radius);
  outline: none;
  font-family: var(--font);
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  padding: 9px 14px;
  width: ${({ $expand }) => $expand ? '100%' : 'auto'};
  &:focus { border-color: var(--color-text2); }
`
const Input = styled.input<{ $error?: boolean, $expand?: boolean }>`
  ${InputStyles}
  height: 42px;
`
const Area = styled.textarea<{ $error?: boolean, $expand?: boolean }>`
  ${InputStyles}
  display: block;
  height: 90px;
  resize: none;
`

const FormInput: React.FC<IFormInput> = ({ defVal, expand = false, handler, type = 'text', placeholder }) => {
  return <SCRegistry>
    {(type === 'area')
      ? <Area
        placeholder={placeholder}
        $expand={expand}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handler(e.target.value)}
        defaultValue={defVal}
      />
      : <Input
        type={type}
        placeholder={placeholder}
        $expand={expand}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handler(e.target.value)}
        defaultValue={defVal}
      />
    }
  </SCRegistry>
}

export default FormInput