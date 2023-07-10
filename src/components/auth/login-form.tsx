"use client"
import { loginSchema } from '@/lib/yup-validations';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import { LoginFormData } from '@/lib/types';
import Button from '../ui/Button';

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => console.log(data);

  const loginWithTwitterHandler = () => {

  }
  const loginWithGoogleHandler = () => {

  }

  return (
    <>
      <div className="space-y-4">
      <Button
            className="w-full flex items-center justify-center"
            text="Login with Google"
            variant="secondary"
            icon={ <Image src="/google.png" alt="Google Icon" width={200} height={200} className="w-6 h-6 mr-2" />}
            isLoading={false}
            onClick={loginWithGoogleHandler}
            />
        <Button
            className="w-full flex items-center justify-center"
            text="Login with Twitter"
            variant="blue"
            icon={<Image src="/twitter.png" alt="Google Icon" width={200} height={200} className="w-8 h-8 mr-2" />}
            isLoading={false}
            onClick={loginWithTwitterHandler}
            />
        <hr />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="USERNAME" name="username" placeholder="john-deo" register={register} errors={errors} />
        <Input label="PASSWORD" name="password" type="password" placeholder="**************" register={register} errors={errors} />
        <Button
            className="w-full mt-8"
            text="Login"
            isLoading={false}
            onClick={() => handleSubmit(onSubmit)}
        /> 
      </form>
    </>
  );
};

export default LogInForm;
