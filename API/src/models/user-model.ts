export interface UserDoc extends Document {
  type: string;
  status: string;
  basic_info: {
    first_name: string;
    last_name: string;
    dob: Date;
    gender: string;
  };
  contact_info: {
    mobile_number: string;
    email: string;
  };
  auth_info: {
    password: string;
  };

  // Define custom methods
  comparePassword(password: string): Promise<boolean>;
  createAccessToken(expiresIn?: string): string;
}
