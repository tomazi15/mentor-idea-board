import * as yup from "yup";

export const formSchema = yup.object().shape({
  title: yup.string().min(1).required(),
  description: yup.string().min(1).max(140).required(),
});
