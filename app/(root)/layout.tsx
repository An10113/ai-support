import { NavBar } from "@/components/Navbar";
import SideBar from "@/components/SideBar";

const RootLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <div className="h-full">
            <NavBar />
            <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
              <SideBar />
            </div>
            <div className="md:pl-20 pt-16 h-full">
            {children}
            </div>
        </div>
     );
}
 
export default RootLayout;