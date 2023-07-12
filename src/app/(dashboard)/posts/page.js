'use client'
import Button from '@/components/ui/Button'
import NoContent from '@/components/ui/NoContent'
import { ChevronLeft, File, Plus } from 'lucide-react'
import React from 'react'

const Posts = () => {
    const addPosts = () => {

    }
    return (
        <main className='w-full'>
            <header className='flex items-center justify-between m-8'>
                <div>
                    <h1 className='text-3xl font-bold mb-2'>Posts</h1>
                    <p>Create and manage posts.</p>
                </div>
                <Button text='Create Post' icon={<Plus className='h-4 w-4 mr-2' />} onClick={addPosts} className='flex' />
            </header>
            <section className='m-8'>
                <NoContent type="posts" onClick={addPosts} icon={<File className='w-[5rem] h-[5rem] stroke-[1.3]' />} />
            </section>
        </main>
    )
}

export default Posts