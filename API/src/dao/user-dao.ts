// UserDao.ts

import crypto from "crypto";
import User from "../schema/user-schema";


export namespace UserDao {
  // Find the user via email
  export const getUserByEmail = async (email: string) => {
    try {
      const user = await User.findOne({ "contact_info.email": email });

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  // User Authentication
  export const authenticateUser = async (email: string, password: string) => {
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("Email not found");
    }

    if (user.type === "ADMIN" && user.status === "ACTIVE") {
      const isMatch = await user.comparePassword(password);

      if (isMatch) {
        const result = {
          token: user.createAccessToken(),
          user: user,
          status: "ACTIVE",
        };
        return result;
      } else {
        throw new Error("Incorrect Passoword");
      }
    }

    if (user.type === "USER") {
      throw new Error("Unauthorized");
    }
  };

  // User Registration
  export const userRegistration = async (data: any) => {
    try {
      // Check if the user already exists
      const isExistUser = await getUserByEmail(data.email);

      if (isExistUser) {
        throw new Error("Email Already Exists");
      }

      const hashPassword = async (password: string) => {
        const hash = await crypto.createHash("sha256");
        hash.update(password);
        return hash.digest("hex");
      };
      // data for schema
      const savedata = {
        type: data.type ? data.type : "USER",
        status: data.status ? (data.status = "ACTIVE") : "ONBOARD",
        basic_info: {
          first_name: data.firstname,
          last_name: data.lastname,
          dob: data.DOB,
          gender: data.gender,
        },
        contact_info: {
          mobile_number: data.mobilenumber,
          email: data.email,
        },
        auth_info: {
          password: data.password ? await hashPassword(data.password) : " ",
        },
      };

      // Create a new user
      await User.create(savedata);

      return "User created successfully";
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  // User data Retreive
  export const getUsersData = async (type: string) => {
    try {
      const users = await User.find({ type }, { auth_info: 0 });
      console.log(users);
      return users;
    } catch (error: any) {
      throw new Error(`Error retrieving users data: ${error.message}`);
    }
  };
}
