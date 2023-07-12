"use client";
import { loginSchema } from "@/lib/yup-validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useRouter } from "next/navigation";

const LogInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const formSubmit = (data) => {
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          label="EMAIL"
          name="email"
          placeholder="john-deo@mail.com"
          register={register}
          errors={errors}
        />
        <Input
          label="PASSWORD"
          name="password"
          type="password"
          placeholder="**************"
          register={register}
          errors={errors}
        />
        <button className="text-white bg-black rounded-lg px-6 py-4 w-full mt-8">
          Login
        </button>
      </form>
    </>
  );
};

export default LogInForm;
