const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const phonenumber = "+441234567890"; // The phone number to validate
// const countryCode = "GB"; // The country code or locale for the UK

const MIN_NAME_LENGTH = 2; // Minimum required length for the first name

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
  },
  accept: {
    type: Boolean,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (
  firstname,
  lastname,
  phonenumber,
  email,
  password,
  read,
  accept
) {
  // validation
  if (
    !firstname ||
    !lastname ||
    !phonenumber ||
    !email ||
    !password ||
    !read ||
    !accept
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  if (!validator.isLength(firstname, { min: MIN_NAME_LENGTH })) {
    throw Error("First name not long enough");
  }
  if (!validator.isLength(lastname, { min: MIN_NAME_LENGTH })) {
    throw Error("Last name not long enough");
  }
  if (!validator.isMobilePhone(phonenumber)) {
    throw Error("Phone number is not valid");
  }
  if (!read) {
    throw Error("Read and accept the terms and conditions");
  }
  if (!accept) {
    throw Error("Read and accept the privacy policy");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstname,
    lastname,
    phonenumber,
    email,
    password: hash,
    read,
    accept,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
