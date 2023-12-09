
import { Categories } from "@/components/Categories";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";

interface RootPageProps {
    searchParams: {
        categoryId: string;
        name: String;
    }
}


const RootPage = async ({searchParams} : RootPageProps) => {

    
    const category = await prismadb.category.findMany()

    return ( 
    <div className="h-full p-4 space-y-2">
        <SearchInput />
        <Categories data={category}/>
    </div> 
    );
}
 
export default RootPage;

