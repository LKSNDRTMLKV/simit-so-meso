import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import Avatar from '~/components/common/Avatar'
import IconButton from '~/components/common/IconButton'
import { type ChatState } from '../conversations/Chat'
import { type MessageState } from './Messages'
// import AnonAvatar from '../../../../test/no-image-user.jpg'

type Props = Omit<ChatState,
    'setConversationId' | 'setRecepient'> &
    MessageState;


export const MessagesHeader = ({ conversationId, recepient, closeMessage, addToConversationQueue }: Props) => {
    // const anon = 'https://thumbs.dreamstime.com/b/no-user-profile-picture-24185395.jpg';
    return (
        <>
            {/* {conversationId && recepient ?
                <div className='flex items-center justify-between space-x-2 relative'>
                    <Avatar src={recepient.image} className='w-22 h-22 absolute shadow-lg' />
                    <div className='flex flex-col'>
                        <p>{recepient.name}</p>
                        <p className='text-tertiaryText text-sm'>@{recepient.username}</p>
                    </div>
                </div> :
                <p className=''>New Message</p>
                // recepient ?
                // :
                // <div>
                //     <Avatar src={anon} />
                // </div>

            } */}

            {
                conversationId && recepient ?

                    <div className="overflow-hidden justify-between absolute md:rounded-xl -left-0 -top-1 z-10 w-full bg-white shadow-lg ring-1 ring-black/5 rounded-b-lg flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 a">
                        {/* <div className="bg-no-repeat bg-right absolute -left-6 w-24 h-24 rounded-full shadow-lg" style={{backgroundImage: `url(${recepient.image})`}}></div> */}
                        {/* <img src={recepient.image} className="absolute -left-6 w-24 h-24 rounded-full shadow-lg bg-right" /> */}
                        {/* <div></div> */}
                        <Avatar  
                        parent={false}
                        src={recepient.image} 
                        className="absolute -left-6 w-24 h-24 rounded-full shadow-lg bg-right"
                        // status='green'
                        />

                        <div className="flex flex-col py-4 pl-20">
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{recepient.name}</p>
                            {/* <div className='flex items-center justify-evenly'>
                            <div className='w-3 h-3 rounded-full bg-green-500'></div>
                            <p>Online</p>
                            </div> */}
                            <p className="text-sm text-gray-500 dark:text-gray-400">@{recepient.username}</p>
                        </div>

                        <div className='flex items-center'>
                            {conversationId ?
                                <IconButton className="text-white" onClick={() => addToConversationQueue(conversationId, recepient)}>
                                    <IoRemoveOutline />
                                </IconButton> :
                                null
                            }
                            <IconButton className="text-white" onClick={closeMessage}>
                                <IoCloseOutline />
                            </IconButton>
                        </div>
                    </div> :
                    <div className='p-2'>

                        <p className="text-center">New Message</p>
                    </div>

            }

            {/* <div className='flex items-center'>
                {conversationId ?
                    <IconButton>
                        <IoRemoveOutline />
                    </IconButton> :
                    null
                }
                <IconButton onClick={closeMessage}>
                    <IoCloseOutline />
                </IconButton>
            </div> */}
        </>
    )
}

export default MessagesHeader;