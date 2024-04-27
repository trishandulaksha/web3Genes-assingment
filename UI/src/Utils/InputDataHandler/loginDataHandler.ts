import { userAPI } from "../../API/userApi";

export const loginDataHandler = async (
  e: React.FormEvent,
  setDbResponse: React.Dispatch<
    React.SetStateAction<{ data: any; error: any }>
  >,
  setSuccess: React.Dispatch<boolean>
) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const emailEl = form.elements.namedItem("email") as HTMLInputElement;
  const passwordEl = form.elements.namedItem("password") as HTMLInputElement;

  const email = emailEl.value;
  const password = passwordEl.value;

  console.log("email", email, "password", password);
  const userData = {
    email,
    password,
  };

  await userAPI.loginUserApi(
    "authenticate",
    userData,
    setDbResponse,
    setSuccess
  );
};
