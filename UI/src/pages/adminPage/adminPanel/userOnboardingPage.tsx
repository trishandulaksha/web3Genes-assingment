import React, { useRef, useState } from "react";
import InputFieldUnit from "../../../Component/InputFieldComponent/InputFieldUnit";
import { registerDataHandler } from "../../../Utils/InputDataHandler/registerDataHandler";
import Notification from "../../../Component/Notification/Notification";

function UserOnboardingPage() {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [dbResponse, setDbResponse] = useState<{ data: any; error: any }>({
    data: null,
    error: null,
  });
  const [success, setSuccess] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleClearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  console.log("register user data", dbResponse);
  return (
    <div className="flex h-screen ">
      <div className="relative z-10 w-full m-8 mt-32 bg-white shadow-2xl shadow-gray-500">
        <div className="items-center justify-center my-3 mx-11">
          {success && !dbResponse.data.error && !dbResponse.error && (
            <Notification message="User registered successfully!" />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              User Onboarding
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
          <div>
            {dbResponse && dbResponse.data && dbResponse.data.error ? (
              <p className="text-red-700">
                {dbResponse.data.error || dbResponse.error || dbResponse.data}
              </p>
            ) : null}
          </div>

          <form
            ref={formRef}
            action=""
            onSubmit={(e) => registerDataHandler(e, setDbResponse, setSuccess)}
          >
            <div className="p-4 mt-4 border border-gray-300">
              <div>
                <p>Basic Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="First Name"
                      errMsgBase="firstname"
                      name="firstname"
                    />
                  </div>

                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="Last Name"
                      errMsgBase="lastname"
                      name="lastname"
                    />
                  </div>
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="date"
                      placeholder=""
                      errMsgBase="DOB"
                      name="DOB"
                    />
                  </div>
                  <div className="pl-1 mt-2">
                    <input
                      list="GenderOption"
                      name="gender"
                      placeholder="Gender"
                      className="w-full px-4 py-2 leading-tight text-gray-700 transition duration-300 ease-in-out border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-400"
                    />
                    <datalist id="GenderOption">
                      <option value="Male" />
                      <option value="Female" />
                    </datalist>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p>Contact Details</p>
                <div className="grid grid-cols-3">
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="Mobile Number"
                      errMsgBase="mobilenumber"
                      name="mobilenumber"
                    />
                  </div>
                  <div className="pl-1">
                    <InputFieldUnit
                      setCanSubmit={setCanSubmit}
                      type="text"
                      placeholder="Email"
                      errMsgBase="email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <div>
                <input
                  type="button"
                  value="Clear"
                  onClick={handleClearForm}
                  className="py-2 text-blue-700 border border-blue-700 shadow-xl cursor-pointer px-7 hover:rounded-md"
                />
              </div>
              <div className="ml-3">
                <input
                  type="submit"
                  value="Save"
                  className="py-2 text-white bg-blue-700 border border-blue-700 shadow-xl cursor-pointer px-7 hover:rounded-md"
                  disabled={!canSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserOnboardingPage;
