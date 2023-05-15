import Creators from "@/components/creators/Creators"

export default function Home() {
  {/* @ts-expect-error Async Server Component */}
  return <Creators/>
}
