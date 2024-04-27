import React, { useEffect, useState } from "react";
import InputFieldUnit from "../../Component/InputFieldComponent/InputFieldUnit";
import { useNavigate } from "react-router-dom";

import { loginDataHandler } from "../../Utils/InputDataHandler/loginDataHandler";

import Notification from "../../Component/Notification/Notification";

function LoginPage() {
  const navigate = useNavigate();
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [dbResponse, setDbResponse] = useState<{ data: any; error: any }>({
    data: null,
    error: null,
  });
  const [success, setSuccess] = useState<boolean>(false);

  // isNotAdmin(dbResponse);
  console.log("DB response", dbResponse);
  const handleUserNavigation = () => {
    const { data } = dbResponse;
    if (!dbResponse.error && data && data.user) {
      const {
        token,
        status,
        user: { type },
      } = data;
      if (token && type === "ADMIN" && status === "ACTIVE") {
        localStorage.setItem("web3token", token);
        setTimeout(() => {
          navigate("adminpanel/useronboardingpage");
          setSuccess(true);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    handleUserNavigation();
  }, [dbResponse]);

  return (
    <>
      <div className="mt-3 mx-52">
        {success && !dbResponse.data.error && !dbResponse.error && (
          <Notification message="User Login successfully!" />
        )}
      </div>
      <div className="flex items-center justify-center h-screen ">
        <div className="border border-blue-600 w-3/4  sm:w-2/5 border-t-[20px] p-4 lg:p-14 md:p-6 sm:p-5 shadow-lg">
          {/* Header tags */}
          <div className="w-full">
            <div className="mb-8 font-sans text-center text-gray-600 ">
              <h1 className="text-3xl font-bold ">Login</h1>

              <p className="mt-1 font-sans ">
                Lorem ipsum dolor sit amet consectetur.Risus commodo faucibus
                pellentesque habitan.Tincidunt.
              </p>
            </div>

            {/* Form componenet */}
            <div className="pb-6 ">
              <div>
                {dbResponse && dbResponse.data && dbResponse.data.error ? (
                  <p className="text-red-700">
                    {dbResponse.data.error || dbResponse.error}
                  </p>
                ) : null}
              </div>
              <div className="">
                <form
                  action=""
                  onSubmit={(e) => {
                    loginDataHandler(e, setDbResponse, setSuccess);
                    handleUserNavigation();
                  }}
                >
                  <InputFieldUnit
                    setCanSubmit={setCanSubmit}
                    type="text"
                    placeholder="Email"
                    errMsgBase="email"
                    name="email"
                  />
                  <InputFieldUnit
                    setCanSubmit={setCanSubmit}
                    type="password"
                    placeholder="Password"
                    errMsgBase="password"
                    name="password"
                  />
                  <p className="text-right">Forget Password</p>

                  <div className="mt-7 ">
                    <div className="h-8">
                      <button
                        type="submit"
                        className="w-full py-2 text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-400 hover:mt-1 "
                        disabled={!canSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
