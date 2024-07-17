import { TextField } from "@mui/material";
import type { StandardTextFieldProps } from "@mui/material";
import { useFormikContext } from "formik";

interface FormikTextFieldProps extends StandardTextFieldProps {
  name: string;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  name,
  ...props
}) => {
  const form = useFormikContext();
  return <TextField {...form.getFieldProps(name)} {...props} />;
};

export default FormikTextField;
