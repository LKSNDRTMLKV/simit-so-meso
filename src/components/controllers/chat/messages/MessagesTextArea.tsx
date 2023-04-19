import React, { useRef, useEffect } from 'react'
import { IoSend, IoThumbsUp } from 'react-icons/io5';
import IconButton from '~/components/common/IconButton';
import useSearchUser from '~/hooks/useSearchUser';
import { api } from '~/utils/api';
import { ChatState } from '../conversations/Chat';

type Props = Pick<ChatState, 'recepient' | 'conversationId' | 'setConversationId'>

const MessagesTextArea = ({ recepient, conversationId, setConversationId }: Props) => {
    const {
        values: { message: message },
        setValues,
        handleChange
    } = useSearchUser({ message: '' });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const utils = api.useContext()
    const sendMessageMutation = api.chat.sendMessage.useMutation();

    useEffect(() => {
        handleTextAreaResize();
    }, [message])


    const handleSendMessage = () => {
        if (message) {
            sendMessageMutation.mutate({
                ...(conversationId === 'newMessage'
                    ? { userId: recepient?.id }
                    : { conversationId }),
                messageText: message,
            }, {
                onSettled: (data, error)  => {
                    if (conversationId !== 'newMessage') {
                        void utils.chat.conversations.invalidate()
                        void utils.chat.messages.invalidate({
                            conversationId: conversationId!
                        })

                    }

                    if (data) {
                        setConversationId(data?.id);
                    }
                    if (error) {
                        console.log(error.message);
                    }
                    setValues({ message: "" });
                }
            });
        }
    };


    const handleTextAreaResize = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "";
            textAreaRef.current.style.height =
                Math.min(textAreaRef.current.scrollHeight, 144).toString() + "px";
        }
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.altKey && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
        if (e.key === "Enter" && (e.altKey || e.shiftKey)) {
            e.preventDefault();
            setValues((values) => ({ message: values.message + "\r\n" }));
        }
    }


    return (
        <div className="flex space-2 items-center p-2 absolute bottom-0 left-0 w-full">
            <textarea
                ref={textAreaRef}
                name="message"
                onChange={handleChange}
                className="h-10 max-h-32 w-full resize-none rounded-lg bg-level2 px-3 py-2 outline-none placeholder:text-quaternaryText "
                onKeyDown={handleOnKeyDown}
                value={message}
                placeholder="Message" />
            {message ?
                <IconButton disabled={!message}>
                    <IoSend onClick={handleSendMessage} />
                </IconButton> :
                <IconButton>
                    <IoThumbsUp />
                </IconButton>
            }
        </div>
    )
}

export default MessagesTextArea;