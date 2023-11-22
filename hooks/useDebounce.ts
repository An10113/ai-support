import { useEffect, useState } from "react"

export default function useDebounce<T>(value:T, delay:number) : T {
    const[debounceValue, setDebounceValue] = useState<T>(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay || 500)
        return () => {
            clearTimeout(timer)
        }
    },[delay, value])
    return debounceValue
}
