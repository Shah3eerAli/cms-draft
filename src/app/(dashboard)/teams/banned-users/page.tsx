'use client'
import NoContent from '@/components/ui/NoContent'
import { Ban } from 'lucide-react'
import React from 'react'

const page = () => {
  const unBanned = () => {

  }
  return (
    <main className='w-full'>
      <header className='flex items-center justify-between m-8'>
        <div>
          <h1 className='text-3xl font-bold mb-2'>Banned Users</h1>
          <p>Manage all banned users.</p>
        </div>
        <span />
      </header>
      <section className='m-8'>
        <NoContent type="posts" icon={<Ban className='w-[5rem] h-[5rem] stroke-[1.3]' />} />
      </section>
    </main>
  )
}

export default page