import { type Dispatch, type SetStateAction, useState, useEffect } from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import Avatar from '~/components/common/Avatar';
import IconButton from '~/components/common/IconButton';
import Messages from '../messages/Messages';
import Conversations from './Conversations';

export interface ChatState {
    conversationId: string | null,
    recepient: Partial<User> | null,
    setConversationId?: Dispatch<SetStateAction<string | null>>,
    setRecepient?: Dispatch<SetStateAction<User | null >>,
}

interface UserState {
    id: string,
    username: string,
    image: string,
    name: string,
}

export type User = Partial<UserState> | null

// interface Props {
//     showChat: boolean,
//     handleShowChat: () => void,
// }


const Chat = () => {
    const [conversationId, setConversationId] = useState<string | null>(null)
    const [recepient, setRecepient] = useState<User | null>(null);
    const [showConversations, setShowConversations] = useState<boolean>(false);
    const [conversationQueue, setConversationQueue] = useState<{ conversationId: string, recepient: User }[]>([])
    const [showChat, setShowChat] = useState<boolean>(false);

    const handleShowChat = () => {
        setShowChat(chat => !chat);
    }



    const handleShowConversation = () => setShowConversations(!showConversations)

    const handleSelectConversation = (
        conversationId: string,
        recepient: User | null
    ) => {
        setConversationId(conversationId)
        setRecepient(recepient)
        setShowConversations(false)
        handleRemoveFromConversationQueue(conversationId)
    }


    const handleAddToConversationQueue = (
        conversationId: string,
        recepient: User
    ) => {
        setConversationQueue(queue => ([...queue, { conversationId, recepient }]))
        handleCloseMessage()
    }

    const handleRemoveFromConversationQueue = (conversationId: string) => {
        setConversationQueue(queue => queue.filter(convo => convo.conversationId !== conversationId))
    }

    const handleCloseMessage = () => {
        setConversationId(null);
        setRecepient(null);
    }

    // useEffect(() => {

    // },[conversationQueue])

    return (
        <div className='z-50'>
            {/* {!conversationId ?
                <Conversations selectConversation={handleSelectConversation} /> :
                <Messages
                    conversationId={conversationId}
                    recepient={recepient}
                    setConversationId={setConversationId}
                    setRecepient={setRecepient}
                />
            } */}
            <IconButton onClick={handleShowConversation} shouldFill={showConversations}>
                <IoChatboxOutline />
            </IconButton>

            {showConversations ?
                <Conversations handleSelectConversation={handleSelectConversation} /> :
                null
            }
            {conversationId ?
                <Messages
                    conversationId={conversationId}
                    recepient={recepient}
                    setConversationId={setConversationId}
                    setRecepient={setRecepient}
                    closeMessage={handleCloseMessage}
                    addToConversationQueue={handleAddToConversationQueue}
                    queueLength={conversationQueue.length}
                /> :
                null
            }
            {conversationQueue.length > 0 ?
                <ul className="fixed bottom-4 right-4 leading-[0] space-y-4">
                    {conversationQueue.map(convo => (
                        <li key={convo.conversationId}>
                            <button onClick={() => handleSelectConversation(convo.conversationId, convo.recepient)}>
                                <Avatar src={convo.recepient?.image || ""} />
                            </button>
                        </li>
                    ))}
                </ul> :
                null
            }
        </div>
    )
}

export default Chat;