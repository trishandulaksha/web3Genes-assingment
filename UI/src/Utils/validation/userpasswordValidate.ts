export const userPasswordValidate = (
  data: string,
  setErr: (err: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const tempErrMsgArray = [];
  if (!data.trim()) {
    setErr(true);
    setCanSubmit(false);
    tempErrMsgArray.push("Password is required and cannot contain spaces");
  } else {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(data)) {
      setErr(true);
      setCanSubmit(false);
      tempErrMsgArray.push(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long"
      );
    } else {
      setErr(false);
      setCanSubmit(true);
    }
  }
  setErrMsg(tempErrMsgArray);
};
