"use server"

export const adviceSlip = async () => {
  const response = await fetch("https://api.adviceslip.com/advice")
  const result = await response.json()
  return result
}
