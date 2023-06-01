import Creators from "@/components/creators/Creators"
import CreatorsRealtime from '@/components/creators/CreatorsRealtime'

export default function Home() {
  // {/* @ts-expect-error Async Server Component */}
  // return <Creators/>

  return <CreatorsRealtime />
}
