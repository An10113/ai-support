"use client";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryProps {
  data: Category[];
}

export const Categories = ({ data }: CategoryProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          !categoryId ? "bg-primary/25" : "bg-primary/10",
          `flex items-center text-center 
          text-xs md:text-sm px-2 md:px-4 py-2 transition
          md:py-3 rounded-md hover:opacity-75`
        )}
      >
        Newest
      </button>
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={cn(
            item.id === categoryId ? "bg-primary/25" : "bg-primary/10",
            `flex items-center text-center 
                text-xs md:text-sm px-2 md:px-4 py-2 transition
                md:py-3 rounded-md hover:opacity-75`
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
