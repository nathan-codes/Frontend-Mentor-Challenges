import Image from 'next/image'
import RatingCard from "@/app/components/RatingCard"

export default function Home() {
  return (
    <main className='min-h-screen  flex flex-col items-center justify-center'>
      <RatingCard />
   </main> 
  )
}
