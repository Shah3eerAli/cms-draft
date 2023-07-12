import LogInForm from "@/components/auth/login-form";

export const metadata = {
  title: "Admin Login",
  description: "Generated by create next app",
};

const Login = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="rounded-lg bg-white shadow-sm w-[35rem] p-8">
        <h2 className="text-xl font-bold mb-4">ADMIN LOGIN</h2>
        <LogInForm />
      </div>
    </section>
  );
};

export default Login;