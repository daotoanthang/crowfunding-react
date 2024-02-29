import React, { useState } from "react";
import LayoutAuthentication from "../modules/auth/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Button, ButtonGoogle } from "../components/button";
import FormGroup from "../components/common/FormGroup";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconEyeToggle } from "../components/icons";

const schema = yup.object({
  email: yup.string().email(" ").required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-center lg:text-sm text-xs font-normal text-text3 lg:mb-8 mb-6">
        Dont have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign In With Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
        <FormGroup>
          <div className="text-right">
            {" "}
            <span className="text-primary inline-block text-sm font-medium">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="bg-primary w-full">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
