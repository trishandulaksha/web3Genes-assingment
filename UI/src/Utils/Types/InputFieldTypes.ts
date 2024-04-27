export interface inputFieldTypes {
  type: string;
  placeholder: string;
  errMsgBase: string;
  name: string;
  setCanSubmit: (canSubmit: boolean) => void;
}

export interface loginUserApiProps {
  email: string;
  password: string;
}

export interface registerUserApiProps {
  firstname: string;
  lastname: string;
  DOB: string;
  gender: string;
  mobilenumber: string;
  email: string;
}

export interface UserData {
  _id: string;
  basic_info: {
    first_name: string;
    last_name: string;
    dob: string;
    gender: string;
  };
  contact_info: {
    mobile_number: string;
    email: string;
  };
}
