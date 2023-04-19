import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoChatboxOutline, IoMoonOutline } from 'react-icons/io5';
import Avatar from "~/components/common/Avatar";
import IconButton from "~/components/common/IconButton";
import Random from "~/components/common/Random";
import { SkeletonAvatar } from "~/components/common/Skeletons";
import Chat from "~/components/controllers/chat/conversations/Chat";
// import { FakerAvatar } from "~/test/Avatars";

const Navbar = () => {
    // const [showChat, setShowChat] = useState<boolean>(false);

    const { data: sessionData, status: sessionStatus } = useSession();

    // const handleShowChat = () => {
    //     setShowChat(chat => !chat);
    //}

    // const handleChangeTheme = () => {

    // }

    return (
        <nav className="fixed top-0 z-10 flex h-16 w-full items-center justify-end space-x-2 bg-level1 px-4 shadow-sm">
            <IconButton>
                <IoMoonOutline />
            </IconButton>

            {/* {showChat ? <Chat showChat={showChat} handleShowChat={handleShowChat} /> : null} */}
            <Chat />

            {sessionStatus === "authenticated" && sessionData?.user?.image ?
                <Avatar
                    // src={FakerAvatar}
                    // src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg"
                    src={sessionData?.user?.image ?? ""}
                /> :
                <SkeletonAvatar />
            }
            {/* <Random /> */}
        </nav>
    )
}

export default Navbar;