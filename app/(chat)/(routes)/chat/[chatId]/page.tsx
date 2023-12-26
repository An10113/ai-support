import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface ChatIdProps {
  params: {
    chatId: string;
  };
}

const ChatIdPage = async ({ params }: ChatIdProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      message: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
    },
  });

  return <div className="">Hello</div>;
};

export default ChatIdPage;
