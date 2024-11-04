import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

type CheckFieldProps = {
  label: string;
  value: string;
  handler: (val: string) => void;
};

const CheckField = (props: CheckFieldProps) => {
  const { handler, label, value } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handler(e.target.value)
          }
        />
      }
      label={label}
    />
  );
};

export default CheckField;
