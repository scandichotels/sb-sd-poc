import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputProps {
  label: string;
  variant: "filled" | "outlined" | "standard";
}

const InputSc = ({label, variant}: InputProps) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant={variant} />
    </Box>
  );
};

export default InputSc;
