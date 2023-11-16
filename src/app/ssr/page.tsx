import Image from 'next/image'
import { Sample } from '../components/sample'

export default function Home() {

  return (
   <main className='flex flex-col gap-2 p-4'>
    <h1>
      5秒後に表示される
    </h1>
    <Sample sleepWait={5000} text='hoge' />
   </main>
  )
}
