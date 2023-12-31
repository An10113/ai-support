"use client";

import { Menu,Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MoblieSideBar from "./moblie-sidebar";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export const NavBar = () => {
  return (
    <div
      className="h-16 fixed w-full z-50 flex 
    items-center py-2 px-4 justify-between
    border-b border-primary/10 bg-secondary
    "
    >
      <div className="flex items-center">
        <MoblieSideBar />
        <Link href="/">
        <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
          Companion.AI
        </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant={"premium"} size="sm">
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};
