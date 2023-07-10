'use client'
import Button from '@/components/ui/Button'
import NoContent from '@/components/ui/NoContent'
import { Plus, Users2 } from 'lucide-react'
import React from 'react'

const page = () => {
  const addMember= () => {

  }
  return (
    <main className='w-full'>
      <header className='flex items-center justify-between m-8'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>All Members</h1>
          <p>Manage all members.</p>
        </div>
        <Button text='Add Member' icon={<Plus className='h-4 w-4 mr-2' />} onClick={addMember} className='flex' />
      </header>
      <section className='m-8'>
        <NoContent type="members" onClick={addMember} icon={<Users2 className='w-[5rem] h-[5rem] stroke-[1.3]' />} />
      </section>
    </main>
  )
}

export default page
