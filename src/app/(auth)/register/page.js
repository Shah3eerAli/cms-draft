import RegisterForm from "@/components/auth/register-form";

export const metadata = {
  title: 'Admin Registration',
  description: 'Generated by create next app',
}

const Register = () => {
  return (
    <section className="flex items-center justify-center h-screen">
    <div className="rounded-lg bg-white shadow-sm w-[35rem] p-8">
      <h2 className='text-xl font-bold mb-4'>ADMIN SIGNUP</h2>
      <RegisterForm />
    </div>
  </section>
  )
}

export default Register