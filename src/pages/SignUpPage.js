import React, { useState } from "react";
import LayoutAuthentication from "../modules/auth/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";
import FormGroup from "../components/common/FormGroup";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "../components/icons";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup.string().required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});

const SignUpPage = () => {
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-center lg:text-sm text-xs font-normal text-text3 lg:mb-8 mb-6">
        Already have an account ?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <button className=" dark:text-white flex justify-center py-4 items-center gap-x-3 w-full border border-strock rounded-xl text-text2 font-semibold text-base mb-5 dark:border-darkStroke">
        <img srcSet="/Google.png 2x" alt="google-icon" />
        <span>Sign up with google</span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)} action="">
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="jhondoe@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            control={control}
            name="password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              onClick={handleTogglePassword}
              open={showPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox checked={acceptTerm} name="term" onClick={handleToggleTerm}>
            <p className="text-xs lg:text-sm text-text2 flex-1 dark:text-text3">
              I agree to the{" "}
              <span className="text-secondary underline">Tearms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="uderline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="bg-primary w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
