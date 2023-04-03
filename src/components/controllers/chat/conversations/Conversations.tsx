import IconButton from "~/components/common/IconButton";
import { IoChevronBack, IoAddOutline } from "react-icons/io5";
import Avatar from "~/components/common/Avatar";
import { type ChatState, type User } from "./Chat";
import { useState } from "react";

const convos = [
    {
        userId: "1",
        conversation: {
            id: "2",
            conversationUser: [
                {
                    id: "1",
                    name: "Tomas Hoffman",
                    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg",
                    username: "Me"
                },
                {
                    id: "25",
                    name: "John Doe",
                    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/967.jpg",
                    username: "Johhny"
                }
            ],
            messages: [{
                id: "4",
                messageText: "Hello Brodasdasdasdasdasdsadsadsadsadsadsadasdas",
            }]
        }
    },
    {
        userId: "1",
        conversation: {
            id: "25",
            conversationUser: [
                {
                    id: "1",
                    name: "Tomas Hoffman",
                    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg",
                    username: "Me"
                },
                {
                    id: "2",
                    name: "John Doe",
                    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/969.jpg",
                    username: "Johhny"
                }
            ],
            messages: [{
                id: "10",
                messageText: "Hello Brodasdasdasdasdasdsadsadsadsadsadsadasdas",
            }]
        }
    },
    {
        userId: "1",
        conversation: {
            id: "27",
            conversationUser: [
                {
                    id: "1",
                    name: "Tomas Hoffman",
                    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg",
                    username: "Me"
                },
                {
                    id: "28",
                    name: "John Doe",
                    image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg",
                    username: "Johhny"
                }
            ],
            messages: [{
                id: "90",
                messageText: "Hello Brodasdasdasdasdasdsadsadsadsadsadsadasdas",
            }]
        }
    }
]

interface Props {
    handleSelectConversation: ( conversationId : string, recepient: User  ) => void
}

const Conversations = ({ handleSelectConversation }: Props) => {
    // const [onConversation, setOnConversation] = useState<boolean>(false);

    // const handleSelectConversation = ({ conversationId, recepient }: ChatState) => {
    //     selectConversation({ conversationId, recepient })
    // }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col space-y-4 bg-level1 p-4 
            md:bottom-4 md:left-[unset] md:top-[unset] md:right-20 md:h-[540px] md:w-96 md:rounded-xl md:shadow-sm">

            <div className="flex items-center justify-between">
                <IconButton className="md:hidden">
                    <IoChevronBack />
                </IconButton>

                <p className="text-lg">Messages</p>

                <IconButton onClick={() => handleSelectConversation("newMessage", null)}>
                    <IoAddOutline />
                </IconButton>
            </div>

            <ul>
                {convos?.map((convo, idx) => {
                    const recepient = convo.conversation.conversationUser[0]!.id === convo.userId ?
                        convo.conversation.conversationUser[1] :
                        convo.conversation.conversationUser[0]

                    return (
                        <li key={idx}
                            className="rounded-lg hover:bg-level1Hover">
                            <button
                                className="flex items-center text-left space-x-2 w-full p-2"
                                onClick={() => handleSelectConversation(convo.conversation.id, recepient!)}>
                                <Avatar src={recepient!.image} />

                                <div className="mb-1 space-y-2 overflow-hidden">
                                    <p className="">{recepient!.name}</p>
                                    <p className="text-tertiaryText text-sm truncate">{convo.conversation.messages[0]?.messageText}</p>
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Conversations;