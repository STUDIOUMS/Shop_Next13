import { TextField, TextFieldProps } from "@mui/material";

const CustomInput = (props: TextFieldProps): JSX.Element => {
  return (
    <TextField
      {...props}
      sx={(theme) => ({
        mb: 6,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey[400],
          borderWidth: "1px !important",
          borderRadius: "6px",
        },
        "& .MuiInputBase-root:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.grey[500],
          },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.common.black,
          },
        "& .MuiFormHelperText-root": {
          fontSize: theme.typography.body2.fontSize,
        },
      })}
    />
  );
};

export default CustomInput;
