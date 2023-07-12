"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { smtpValidationSchema } from "@/lib/yup-validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Page = async () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(smtpValidationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <main className="w-full">
      <section className="flex items-center justify-center h-screen">
        <div className="rounded-lg bg-white shadow-sm w-[45rem] p-8">
          <h2 className="text-xl font-bold mb-4">MAIL SETTING</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-4">
              <Input
                label="SENDER NAME"
                name="senderName"
                placeholder="support"
                register={register}
                errors={errors}
              />
              <Input
                label="SENDER ADDRESS"
                name="senderAddress"
                placeholder="support@example.com"
                register={register}
                errors={errors}
              />
              <Input
                label="HOST"
                name="host"
                placeholder="smtp.google.com"
                register={register}
                errors={errors}
              />
              <Input
                label="PORT"
                name="port"
                type="number"
                placeholder="576"
                register={register}
                errors={errors}
              />
            </div>
            <Input
              label="USERNAME"
              name="username"
              placeholder="John Deo"
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
            <div className="mt-8 float-right">
              <Button
                text="Save Changes"
                className="flex items-center justify-center"
                onClick={() => {}}
                isLoading={false}
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Page;
