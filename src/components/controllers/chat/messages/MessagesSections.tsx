import React from 'react'
import Avatar from '~/components/common/Avatar'
import { type ChatState } from '../conversations/Chat'

interface Message {
    id: string,
    messageText: string,
    userId: string,
    createdAt: Date,
}

type Props = Pick<ChatState, 'recepient'>

const MessagesSections = ({ recepient }: Props) => {
    const messages: Message[] = [
        {
            id: '1',
            messageText: 'Hello Bro. How are you doing? I am doing good. I am doing good.',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '1',
            messageText: 'Hello Bro',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '2',
            messageText: 'Hello Broski',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '2',
            messageText: 'Hello Bro. How are you doing? I am doing good. I am doing good.',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '1',
            messageText: 'Hello Bro',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '2',
            messageText: 'Hello Broski',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '2',
            messageText: 'Hello Bro. How are you doing? I am doing good. I am doing good.',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '1',
            messageText: 'Hello Bro',
            userId: '1',
            createdAt: new Date(),
        },
        {
            id: '2',
            messageText: 'Hello Broski',
            userId: '1',
            createdAt: new Date(),
        }
    ]

    const getTimestamp = (messages: Message[], idx: number) => {
        const currentDate = messages[idx]?.createdAt;
        const previousDate = idx !== 0 ? messages[idx - 1]?.createdAt : null;

        if (previousDate) {
            if (previousDate?.getDate() === currentDate?.getDate() &&
                previousDate.getMonth() === currentDate.getMonth() &&
                previousDate.getFullYear() === currentDate.getFullYear()) {
                return null;
            }
        }
    }

    return (
        <ul className='md:h-3/4 h-5/6 flex flex-col space-y-4 overflow-y-auto no-scrollbar p-2 mt-20 mb-10'>
            {messages.map((message, idx) => {
                const timestamp = getTimestamp(messages, messages.indexOf(message));
                return (
                    <li key={idx} className="flex flex-col w-full">
                        {timestamp ?
                            <p className="text-quaternaryText">{timestamp}</p> :
                            null
                        }

                        {/* {console.log(message.id, recepient?.id)} */}
                        {message.id === recepient?.id ?
                            <div className="flex items-center space-x-2 relative">
                                <Avatar src={recepient.image} className="w-10 h-10 absolute shadow-lg rounded-full" />

                                <div className="flex flex-col bg-level2 p-2 rounded-2xl space-y-2 max-w-[75%]">
                                    <p className="text-primaryText whitespace-pre-line">
                                        {message.messageText}
                                    </p>
                                    <p className="text-tertiaryText text-xs text-right">
                                        {new Intl.DateTimeFormat([], {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        }).format(message.createdAt)}
                                    </p>
                                </div>
                            </div> :
                            <div className="flex flex-col self-end rounded-2xl bg-primaryText p-2 space-y-2 max-w-[75%]">
                                <p className="text-invertedPrimaryText whitespace-pre-line">
                                    {message.messageText}
                                </p>
                                <p className="text-xs self-end text-invertedTertiaryText">
                                    {new Intl.DateTimeFormat([], {
                                        hour: 'numeric',
                                        minute: 'numeric'
                                    }).format(message.createdAt)}
                                </p>
                            </div>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default MessagesSections