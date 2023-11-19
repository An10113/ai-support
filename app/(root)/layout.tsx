const RootLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <div className="h-full">
            <NavBar />
            <div className="md:pl-20 pt-16 h-full">
            {children}
            </div>
        </div>
     );
}
 
export default RootLayout;