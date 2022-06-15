import Button from "@mui/material/Button";
interface ButtonScProps {
  variant: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  label: string;
  disabled?: boolean;
  size: "small" | "medium" | "large";
}

const ButtonSc = ({ variant, color, label, disabled, size }: ButtonScProps) => {
  return (
    <Button variant={variant} color={color} disabled={disabled} size={size}>
      {label}
    </Button>
  );
};

export default ButtonSc;
