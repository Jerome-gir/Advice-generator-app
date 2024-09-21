"use client"

import { adviceSlip } from "@/actions/adviceSlip"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [advice, setAdvice] = useState({ id: "", advice: "" })

  const fetchAdvice = async () => {
    const newAdvice = await adviceSlip()
    setAdvice(newAdvice)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <>
      <div className="bg-darkBlue h-screen flex justify-center items-center">
        <div className="size-96 sm:w-[600px] bg-darkGrayishBlue rounded-xl relative">
          <div className="flex flex-col items-center justify-between gap-10 p-8">
            <h1 className="text-neonGreen text-sm sm:text-base tracking-widest uppercase">
              Advice # {advice.id}
            </h1>
            <p className="text-xl sm:text-2xl font-extrabold text-ligthCyan text-center">
              <span className="text-3xl">“</span>
              {advice.advice}
              <span className="text-3xl">”</span>
            </p>
            <Image
              className="block sm:hidden"
              src="/pattern-divider-mobile.svg"
              alt="image de séparation mobile"
              width={295}
              height={16}
            />
            <Image
              className="hidden sm:block"
              src="/pattern-divider-desktop.svg"
              alt="image de séparation desktop"
              width={490}
              height={16}
            />
            <button
              onClick={fetchAdvice}
              className="rounded-full size-20 bg-neonGreen flex items-center justify-center absolute -bottom-10
               sm:transition-all sm:duration-500 sm:hover:shadow-[0_0_25px_5px] sm:hover:shadow-neonGreen"
            >
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
