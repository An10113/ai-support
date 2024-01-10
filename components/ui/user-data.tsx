import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "./avatar"



const UserAvatar = () => {
    const {user}= useUser()
    return ( 
            <Avatar className="h-12 w-13">
            <AvatarImage src={user?.imageUrl} />
            </Avatar>
     );
}
 
export default UserAvatar;