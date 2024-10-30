import { ERROR_TEXT } from "@/options/constants";
import CustomBtn from "@/ui/CustomBtn";
import CustomModal from "@/ui/CustomModal";
import { useForm } from "react-hook-form";
import Btn from "../../ui_old/Btn";
import FormInput from "../../ui_old/FormInput";
import FormLine from "../../ui_old/FormLine";

type FeedBackFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FeedbackModalProps = {
  show: boolean;
  close: () => void;
};

const FeedbackModal = (props: FeedbackModalProps): JSX.Element => {
  const { close, show } = props;
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
    <CustomModal close={close} open={show} title="Обратная связь">
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

        <CustomBtn type="submit" color="primary" fullWidth>
          Оправить
        </CustomBtn>
      </form>
    </CustomModal>
  );
};

export default FeedbackModal;
