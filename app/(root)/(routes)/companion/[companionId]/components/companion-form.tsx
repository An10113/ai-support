"use client"

import * as z from "zod";
import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1, {
        message : "Name is required."
    }),
    desciption: z.string().min(1, {
        message : "desciption is required."
    }),
    instructions: z.string().min(200, {
        message : "instructions required at least 200 characters"
    }),
    seed: z.string().min(200, {
        message : "seed required at least 200 characters"
    }),
    src: z.string().min(1, {
        message : "Image is required."
    }),
    categoryId: z.string().min(1, {
        message : "Category is required."
    }),
})

interface CompanionFormProps {
    initialData: Companion | null
    categories : Category[]
}

export const CompanionForm = ({ categories, initialData}: CompanionFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: "",
            desciption: "",
            
        }
    })
    return ( 
        <>
            Hello
        </>
     );
}
 
