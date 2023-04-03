import React, { useRef, useEffect } from 'react'
import { IoSend, IoThumbsUp } from 'react-icons/io5';
import IconButton from '~/components/common/IconButton';
import useSearchUser from '~/hooks/useSearchUser';



const MessagesTextArea = () => {
    const {
        values: { message : message  },
        setValues,
        handleChange
    } = useSearchUser({ message: '' });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    
    useEffect(() => {
        handleTextAreaResize();
    },[message])

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
            setValues({ message: "" });
          }
          if (e.key === "Enter" && e.altKey) {
            e.preventDefault();
            setValues((values) => ({ message: values.message + "\r\n" }));
          }}


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
                        <IoSend />
                    </IconButton> :
                    <IconButton>
                        <IoThumbsUp />
                    </IconButton>
                }
            </div>
        )
    }

    export default MessagesTextArea;