import React, { useEffect } from 'react'
import { type User, type ChatState } from '../conversations/Chat'
import ConversationInput from '../conversations/ConversationInput'
import MessagesHeader from './MessagesHeader'
import MessagesSections from './MessagesSections'
import MessagesTextArea from './MessagesTextArea'
import { api } from '~/utils/api'

export interface MessageState {
    message?: string,
    addToConversationQueue: (conversationId: string, recepient: User) => void,
    closeMessage: () => void,
}

type Props = ChatState &
    MessageState & {
        queueLength: number,
    }


// type Props = Omit<ChatState, "setConversationId">

const Messages = ({
    conversationId,
    recepient,
    setConversationId,
    setRecepient,
    addToConversationQueue,
    closeMessage,
    queueLength,
}: Props) => {

    const { data: conversationDataId, refetch } = api.chat.findConversation.useQuery({
        userId: recepient?.id || ''
    },{ enabled: false })

    useEffect(() => {
        if(conversationId === 'newMessage'){
            refetch()
        }
    },[recepient])

    useEffect(() => {
        if(conversationDataId) {
            setConversationId(conversationDataId)
        }
    }, [conversationId])

    return (
        <div className='flex flex-col fixed rounded-xl bg-level1 shadow-sm space-y-2
        max-md:top-0 max-md:left-0 bottom-0 right-0 md:right-20 md:bottom-4 md:w-96 md:h-[540px]'>
        
            <div className='p-2 h-full'>
                <MessagesHeader
                    conversationId={conversationId}
                    recepient={recepient}
                    addToConversationQueue={addToConversationQueue}
                    closeMessage={closeMessage}
                />

                {recepient ?
                    <>
                        <MessagesSections recepient={recepient} conversationId={conversationId} />
                        <MessagesTextArea recepient={recepient} conversationId={conversationId} setConversationId={setConversationId} />
                    </> :
                    <ConversationInput
                    conversationId={conversationId}
                    recepient={recepient}
                    setRecepient={setRecepient}
                    />}
                </div>



                {/* {recepient ? <MessagesTextArea /> : null} */}
        </div>
    )
}

export default Messages