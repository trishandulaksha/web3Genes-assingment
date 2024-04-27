import React, { useState } from "react";
import { inputFieldTypes } from "../../Utils/Types/InputFieldTypes";
import { userEmailValidate } from "../../Utils/validation/useremailValidate";
import { userPasswordValidate } from "../../Utils/validation/userpasswordValidate";
import {
  userNameValdiate,
  validateDOB,
  validateMobileNumber,
} from "../../Utils/validation/userdataValidation";

function InputFieldUnit({
  type,
  placeholder,
  errMsgBase,
  setCanSubmit,
  name,
}: inputFieldTypes) {
  const [errMsg, setErrMsg] = useState<String[]>();
  const [err, setErr] = useState<boolean>(true);
  return (
    <>
      <div className="mt-2 ">
        <input
          key={name}
          className={`w-full px-4 py-2 leading-tight text-gray-700 transition duration-300 ease-in-out border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white ${
            err ? "focus:border-red-400" : "focus:border-blue-400"
          }`}
          type={type}
          name={name}
          placeholder={placeholder}
          onBlur={(e) =>
            errMsgBase === "email"
              ? userEmailValidate(
                  e.target.value,
                  setErr,
                  setErrMsg,
                  setCanSubmit
                )
              : errMsgBase === "password"
              ? userPasswordValidate(
                  e.target.value,
                  setErr,
                  setErrMsg,
                  setCanSubmit
                )
              : errMsgBase === "firstname"
              ? userNameValdiate(
                  e.target.value,
                  setErr,
                  setErrMsg,
                  setCanSubmit
                )
              : errMsgBase === "lastname"
              ? userNameValdiate(
                  e.target.value,
                  setErr,
                  setErrMsg,
                  setCanSubmit
                )
              : errMsgBase === "DOB"
              ? validateDOB(e.target.value, setErr, setErrMsg, setCanSubmit)
              : validateMobileNumber(
                  e.target.value,
                  setErr,
                  setErrMsg,
                  setCanSubmit
                )
          }
          onChange={() => err && setErr(false)}
        />
      </div>
      {err ? errMsg?.map((msg) => <p className="text-red-500">{msg}</p>) : null}
    </>
  );
}

export default InputFieldUnit;
