"use client"

import qs from "query-string";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

const SearchInput = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const categoryId = searchParams.get("categoryId")
    const name = searchParams.get("name")

    const [value, setValue] = useState(name || "")
    const debounceValue = useDebounce(value, 500)
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const query = { 
          name: debounceValue, 
          categoryId: categoryId,
        };
    
        const url = qs.stringifyUrl({
          url: window.location.href,
          query: query,
        }, { skipNull: true, skipEmptyString: true });
    
        router.push(url);
      }, [debounceValue, router, categoryId])
    return ( 
        <div className="relative">
            <SearchIcon className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
            <Input
            onChange={onChange}
            value={value}
            placeholder="Search..." 
            className="pl-10 bg-primary/10"/>
        </div>
     );
}
 
export default SearchInput;