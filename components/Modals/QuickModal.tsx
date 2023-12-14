import { errorText } from "@/options/settings"
import { useForm } from "react-hook-form"
import Btn from "../../ui/Btn"
import FormInput from "../../ui/FormInput"
import FormLine from "../../ui/FormLine"
import Modal from "../../ui/Modal"

type FormStateType = {
  phone: string
}

interface IQuickModal {
  handler: React.Dispatch<React.SetStateAction<boolean>>
  productId: number
  show: boolean
}

const QuickModal: React.FC<IQuickModal> = ({ handler, productId, show }) => {
  const { handleSubmit, reset, register, formState: { errors } } = useForm<FormStateType>()

  // sendOrder
  const sendOrder = (data: any) => {
    console.log(data, productId)
  }

  return (
    <Modal title="Быстрый заказ" show={show} handler={handler}>
      <FormLine label="Номер телефона">
        <FormInput
          placeholder="+ 7 (123) 456-78-90"
          expand
          valid={register("phone", { required: errorText })}
          error={errors.phone && errors.phone.message}
        />
      </FormLine>
      <Btn type="submit" title="Отправить" expand color="success" handler={handleSubmit(sendOrder)} />
    </Modal>
  )
}

export default QuickModal
