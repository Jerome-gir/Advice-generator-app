import { adviceSlip } from "@/actions/adviceSlip"
import Image from "next/image"

export default async function Home() {
  const response = await adviceSlip()
  console.log(response.slip.advice)

  return (
    <>
      <div className="bg-darkBlue h-screen flex justify-center items-center">
        <div className="size-96 bg-darkGrayishBlue rounded-xl relative">
          <div className="flex flex-col items-center justify-between gap-10 p-8">
            <h1 className="text-neonGreen text-sm tracking-widest uppercase">
              Advice # 117
            </h1>
            <p className="text-xl font-extrabold text-ligthCyan text-center">
              {response.slip.advice}
            </p>
            <Image
              src="/pattern-divider-mobile.svg"
              alt="image de séparation"
              width={295}
              height={16}
            />
            <button className="rounded-full size-20 bg-neonGreen flex items-center justify-center absolute -bottom-10">
              <Image
                src="/icon-dice.svg"
                alt="dice icon"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
