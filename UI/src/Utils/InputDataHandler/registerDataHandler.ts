import { userAPI } from "../../API/userApi";

export const registerDataHandler = async (
  e: React.FormEvent,
  setDbResponse: React.Dispatch<
    React.SetStateAction<{ data: any; error: any }>
  >,
  setSuccess: React.Dispatch<boolean>
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const firstnameEl = form.elements.namedItem("firstname") as HTMLInputElement;
  const lastnameEL = form.elements.namedItem("lastname") as HTMLInputElement;
  const DOBEl = form.elements.namedItem("DOB") as HTMLInputElement;
  const genderEl = form.elements.namedItem("gender") as HTMLInputElement;
  const mobilenumberEl = form.elements.namedItem(
    "mobilenumber"
  ) as HTMLInputElement;
  const emailEl = form.elements.namedItem("email") as HTMLInputElement;

  const firstname = firstnameEl.value;
  const lastname = lastnameEL.value;
  const DOB = DOBEl.value;
  const gender = genderEl.value;
  const mobilenumber = mobilenumberEl.value;
  const email = emailEl.value;

  console.log("email", email, "password");
  const userData = {
    firstname,
    lastname,
    DOB,
    gender,
    mobilenumber,
    email,
  };

  console.log(userData);
  await userAPI.registerUserApi(
    "/register",
    userData,
    setDbResponse,
    setSuccess
  );
};
