import styled, { css } from "styled-components"

interface IFormInput {
  placeholder?: string
  type?: 'text' | 'email' | 'search' | 'tel' | 'password' | 'area'
  expand?: boolean
  handler?: (val: string) => void
  defVal?: string
  val?: string
  valid?: any
  error?: string
}

export const InputStyles = css<{ $error?: boolean, $expand?: boolean }>`
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
export const Input = styled.input<{ $error?: boolean, $expand?: boolean }>`
  ${InputStyles}
  height: 42px;
`
export const Area = styled.textarea<{ $error?: boolean, $expand?: boolean }>`
  ${InputStyles}
  display: block;
  height: 90px;
  resize: none;
`
const ErrorText = styled.span`
  color: var(--color-danger);
  font-size: 12px;
  line-height: 16px;
  margin: 4px 0 0;
`

const FormInput: React.FC<IFormInput> = ({ defVal, expand = false, handler, type = 'text', placeholder, valid, error, val }) => {
  return <>
    {(type === 'area')
      ? <Area
        placeholder={placeholder}
        $expand={expand}
        $error={!!error}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handler!(e.target.value)}
        defaultValue={defVal}
        value={val}
        {...valid}
      />
      : <Input
        type={type}
        placeholder={placeholder}
        $expand={expand}
        $error={!!error}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handler!(e.target.value)}
        defaultValue={defVal}
        value={val}
        {...valid}
      />
    }
    {!!error && <ErrorText>{error}</ErrorText>}
  </>
}

export default FormInput
