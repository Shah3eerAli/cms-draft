'use client'
import Button from '@/components/ui/Button';
import { ChevronLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
const DynamicEditor = dynamic(() => import('@/components/ui/Editor/EditorBlock'), {
  ssr: false,
});

const Post = () => {
  const router = useRouter()
  const [data, setData] = useState<any>();
  console.log(data, "data")

  const addPosts = () => {

  }
  return (
    <main className='w-full'>
      <header className='flex items-center justify-between m-8'>
        <button onClick={() => router.back()} className='flex items-center'>
          <ChevronLeft className='mr-2' /> Back
        </button>
        <div className='flex items-center'>
        <Button text='Save' variant='secondary' onClick={addPosts} className='flex mr-4 bg-transparent' />
        <Button text='Publish' onClick={addPosts} className='flex' />
        </div>
      </header>
      <section className='m-8 max-w-[75ch] mx-auto'>
        <TextareaAutosize
          autoFocus
          id="title"
          placeholder="Post title"
          className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
        />
        <DynamicEditor data={data} onChange={setData} holder="editorjs-container" />
        <p className="text-sm text-gray-500">
            Use{" "}
            <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
      </section>
    </main>
  )
}

export default Post