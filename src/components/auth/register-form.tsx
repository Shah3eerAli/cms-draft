"use client"
import Image from "next/image";
import Input from "../ui/Input";
import { signUpSchema } from "@/lib/yup-validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "@/lib/types";
import Button from "../ui/Button";

const RegisterForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: RegisterFormData) => console.log(data);

  const registerWithTwitterHandler = () => {

  }
  const registerWithGoogleHandler = () => {

  }
  return (
    <>
      <div className="space-y-4">
        <Button
            className="w-full flex items-center justify-center"
            text="Signup with Google"
            variant="secondary"
            icon={ <Image src="/google.png" alt="Google Icon" width={1000} height={1000} className="w-6 h-6 mr-2" />}
            isLoading={false}
            onClick={registerWithGoogleHandler}
            />
        <Button
            className="w-full flex items-center justify-center"
            text="Signup with Twitter"
            variant="blue"
            icon={<Image src="/twitter.png" alt="Google Icon" width={1000} height={1000} className="w-8 h-8 mr-2" />}
            isLoading={false}
            onClick={registerWithTwitterHandler}
            />
        <hr />
      </div>
      <form>
        <Input label="USERNAME" name="username" placeholder="john-deo" register={register} errors={errors} />
        <Input label="PASSWORD" name="password" type="password" placeholder="**************" register={register} errors={errors} />
        <Input label="RE-PASSWORD" name="rePassword" type="password" placeholder="**************" register={register} errors={errors} />
        {/* <button className="text-white bg-black rounded-lg px-6 py-4 w-full mt-8">Signup</button> */}
        <Button
            className="w-full mt-8"
            text="Signup"
            isLoading={false}
            onClick={() => handleSubmit(onSubmit)}
        /> 
      </form>
    </>
  );
};

export default RegisterForm;
