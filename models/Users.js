import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";
import { emailRegexp } from "../helpers/user-constants.js";

const usersSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

usersSchema.post("save", handleSaveError);

usersSchema.pre("findOneAndUpdate", setUpdateSettings);

usersSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", usersSchema);

export default User;
