'use client'
import Button from "@/components/ui/Button";
import NoContent from "@/components/ui/NoContent";
import { ChevronLeft, File, Plus, User } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const addUser = () => {

  }
  return (
    <main className="w-full">
      <header className='flex items-center justify-between m-8'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>Users</h1>
          <p>Create and manage users.</p>
        </div>
        <Button text='Add User' icon={<Plus className='h-4 w-4 mr-2' />} onClick={addUser} className='flex' />
      </header>
      <section className='m-8'>
        <NoContent type="users" onClick={addUser} icon={<User className='w-[5rem] h-[5rem] stroke-[1.3]' />} />
      </section>
    </main>
  )
}

export default Page;