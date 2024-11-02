import { ERROR_TEXT } from "@/constants";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import CustomModal from "@/ui/CustomModal";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";

type FormData = {
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
  } = useForm<FormData>();

  const feedbackHandler = (data: FormData) => {
    console.log(data);
  };

  return (
    <CustomModal close={close} open={show} title="Обратная связь">
      <form onSubmit={handleSubmit(feedbackHandler)} autoCorrect="false">
        <CustomInput
          label="ФИО"
          fullWidth
          inputProps={{ ...register("name", { required: ERROR_TEXT }) }}
          helperText={errors.name && errors.name.message}
          error={errors.name ? true : false}
        />

        <CustomInput
          label="E-mail"
          fullWidth
          type="email"
          inputProps={{ ...register("email") }}
        />

        <CustomInput
          label="Телефон"
          fullWidth
          type="tel"
          inputProps={{ ...register("phone", { required: ERROR_TEXT }) }}
          helperText={errors.phone && errors.phone.message}
          error={errors.phone ? true : false}
        />

        <CustomInput
          label="Сообщение"
          fullWidth
          multiline
          rows={3}
          inputProps={{ ...register("message") }}
        />

        <CustomBtn type="submit" color="primary" fullWidth>
          Оправить
          <CircularProgress size={20} color="secondary" sx={{ ml: 3 }} />
        </CustomBtn>
      </form>
    </CustomModal>
  );
};

export default FeedbackModal;
