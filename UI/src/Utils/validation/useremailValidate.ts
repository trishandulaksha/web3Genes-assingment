export const userEmailValidate = (
  data: string,
  setErr: (err: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const tempErrMsgArray = [];
  if (!data.trim()) {
    setErr(true);
    setCanSubmit(false);

    tempErrMsgArray.push("Email is required and cannot contain spaces");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data)) {
    setErr(true);
    setCanSubmit(false);
    tempErrMsgArray.push("Please enter a valid email address");
  }

  return setErrMsg(tempErrMsgArray);
};
