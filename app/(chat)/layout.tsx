const ChatLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <div className="h-full mx-auto w-full max-w-4xl">
            {children}
        </div>
     );
}
 
export default ChatLayout;