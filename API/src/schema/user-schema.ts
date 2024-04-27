import mongoose from "mongoose";
import jwt, { Secret } from "jsonwebtoken";
import crypto from "crypto";
import { UserDoc } from "../models/user-model";

// User Schema
export const userSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  basic_info: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
  },
  contact_info: {
    mobile_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  auth_info: {
    password: {
      type: String,
      required: true,
    },
  },
});

// hashed the password before the saving in it database

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("auth_info.password") || !this.auth_info) {
//     return next();
//   }
//   try {
//     const hash = await crypto.createHash("sha256");
//     hash.update(this.auth_info.password);
//     this.auth_info.password = hash.digest("hex");
//     return next();
//   } catch (err: any) {
//     return next(err);
//   }
// });

// Create the token
userSchema.methods.createAccessToken = function (expiresIn: string = "2h") {
  try {
    const token = jwt.sign(
      { userId: this._id },
      process.env.JWT_SCRT_KEY as Secret,
      {
        expiresIn: "2h",
      }
    );

    return token;
  } catch (error: any) {
    return error;
  }
};

// Compare password
userSchema.methods.comparePassword = async function (password: string) {
  const hash = await crypto.createHash("sha256");
  hash.update(password);
  const hashedPassword = hash.digest("hex");

  return hashedPassword === this.auth_info.password;
};
const User = mongoose.model<UserDoc>("users", userSchema);

export default User;
