import axios from "axios";
import {
  loginUserApiProps,
  registerUserApiProps,
} from "../Utils/Types/InputFieldTypes";

const URL = process.env.API_URL || "http://localhost:8070/api/user";
export namespace userAPI {
  export const loginUserApi = async (
    endpoint: string,
    userData: loginUserApiProps,
    setDbResponse: any,
    setSuccess: React.Dispatch<boolean>
  ) => {
    try {
      const response = await axios.post(`${URL}/${endpoint}`, userData);
      //   const { data } = response;/
      setDbResponse(response);

      setSuccess(true);
    } catch (error: any) {
      setDbResponse({ error: error.message });
    }
  };

  export const registerUserApi = async (
    endpoint: string,
    userData: registerUserApiProps,
    setDbResponse: any,
    setSuccess: React.Dispatch<boolean>
  ) => {
    try {
      const response = await axios.post(`${URL}/${endpoint}`, userData);
      setDbResponse(response);
      setSuccess(true);
    } catch (error: any) {
      setDbResponse({ error: error.message });
    }
  };

  export const getUserDetails = async (endpoint: string) => {
    try {
      const response = await axios.post(`${URL}/${endpoint}`);
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
