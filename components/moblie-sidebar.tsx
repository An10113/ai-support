import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SideBar from "./SideBar";
import { Menu } from "lucide-react";

const MoblieSideBar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent className="p-0 bg-secondary pt-10 w-32" side="left">
                <SideBar />
            </SheetContent>
        </Sheet>
     );
}
 
export default MoblieSideBar;