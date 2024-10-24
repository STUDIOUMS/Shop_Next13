import { useForm } from "react-hook-form";
import Btn from "../../ui/Btn";
import FormInput from "../../ui/FormInput";
import FormLine from "../../ui/FormLine";
import Modal from "../../ui/Modal";
import { ERROR_TEXT } from "@/options/settings";

type FeedBackFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface IFeedbackModal {
  show: boolean;
  handler: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedbackModal: React.FC<IFeedbackModal> = ({ handler, show }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FeedBackFormValues>();

  // sendMessage
  const sendMessage = (data: any) => {
    console.log(data);
  };

  return (
    <Modal title="Обратная связь" show={show} handler={handler}>
      <form onSubmit={handleSubmit(sendMessage)} autoCorrect="false">
        <FormLine label="Ваше имя *">
          <FormInput
            placeholder="Ваше имя"
            expand
            valid={register("name", { required: ERROR_TEXT })}
            error={errors.name && errors.name?.message}
          />
        </FormLine>

        <FormLine label="Ваш E-mail *">
          <FormInput
            placeholder="mail@mail.com"
            expand
            type="email"
            valid={register("email", {
              required: ERROR_TEXT,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Некорректный e-mail",
              },
            })}
            error={errors.email && errors.email?.message}
          />
        </FormLine>

        <FormLine label="Ваш телефон">
          <FormInput
            placeholder="+ 7 (123) 45-67-89"
            expand
            type="tel"
            valid={register("phone")}
          />
        </FormLine>

        <FormLine label="Сообщение">
          <FormInput
            placeholder="Сообщение"
            expand
            type="area"
            valid={register("message")}
          />
        </FormLine>

        <Btn title="Оправить" type="submit" />
      </form>
    </Modal>
  );
};

export default FeedbackModal;
