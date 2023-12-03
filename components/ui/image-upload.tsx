"use client"

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary"
import Image from "next/image";

interface ImageUploadProps {
    value: string;
    onChange: (src: string) => void
    disabled?: boolean
}

export const ImageUpload = ({value, onChange, disabled}: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <div className="space-y-4 w-full flex flex-col">
            <CldUploadButton
            options={{
                maxFiles: 1
            }}
            uploadPreset="mym5s8qj"
            >
                <div className="p-4 border-4 border-dashed border-primary/10
                rounded-lg hover:opacity-75 transition flex 
                flex-col space-y-2 items-center justify-center">
                    <div className="relative h-40 w-40">    
                        <Image
                        className="rounded-lg object-cover" 
                        src=""
                        fill
                        alt="" />
                    </div>
                </div>
            </CldUploadButton>
        </div>
    )

}