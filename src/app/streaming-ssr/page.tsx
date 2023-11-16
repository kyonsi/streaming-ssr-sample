import Image from 'next/image'
import { Sample } from '../components/sample'
import { Suspense } from 'react'

export default function Home() {

  return (
   <main className='flex flex-col gap-2 p-4'>
    <h1>
      すぐ表示されて部分的に後から表示される
    </h1>
    <Suspense fallback={<div>loading hoge1</div>}><Sample sleepWait={1000} text='hoge1' /></Suspense>
    <Suspense fallback={<div>loading hoge2</div>}><Sample sleepWait={10000} text='hoge2' /></Suspense>
   </main>
  )
}
