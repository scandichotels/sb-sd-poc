import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

interface AlertScProps {
  title: string;
  variant: "standard" | "filled" | "outlined";
  severity: "error" | "warning" | "info" | "success";
  text: string;
}

const AlertSc = ({ title, variant, severity, text }: AlertScProps) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant={variant} severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </Stack>
  );
};

export default AlertSc;
