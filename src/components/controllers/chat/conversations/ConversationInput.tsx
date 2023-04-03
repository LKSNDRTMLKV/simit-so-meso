import { useState, useEffect, useRef } from "react";
import Avatar from "~/components/common/Avatar";
import useSearchUser from "~/hooks/useSearchUser";
import { type User, type ChatState } from "./Chat";

const users: User[] = [
    {
        id: '1',
        name: 'John Doe',
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/970.jpg",
        username: "johndoe",
    },
    {
        id: '20',
        name: 'Jane Doe',
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
        username: "janedoe",
    },
    {
        id: '30',
        name: 'John Smith',
        image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/972.jpg",
        username: "johnsmith",
    }
]

const ConversationInput = ({ setRecepient, }: ChatState) => {
    const { values: { user }, setValues, handleChange } = useSearchUser({ user: '' });
    const [searchResults, setSearchResults] = useState<typeof users>();
    const timer = useRef<NodeJS.Timeout>();

    const fetchUsers = () => {
        if (!user) {
            setSearchResults([]);
            return;
        }
        setSearchResults(users.filter(u =>
            u.username.toLowerCase().includes(user.toLowerCase()) ||
            u.name.toLowerCase().includes(user.toLowerCase())));
    }




    useEffect(() => {
        // if(user) {
        //     clearTimeout(timer.current);

        // }
        // setTimeout(fetchUsers, 200)
        // console.log(searchResults)
        fetchUsers()
    }, [user])

    return (
        <div className="relative">
            <input
                placeholder="Search User"
                className="w-full h-10 rounded-lg placeholder:text-quaternaryText px-3 py-2 bg-level2"
                name="user"
                value={user}
                onChange={handleChange}
                autoComplete="off"
            />
            {searchResults && searchResults.length > 0 ?
                <ul className="absolute top-10 left-0 w-full bg-level2 rounded-lg shadow-md my-2 z-50">
                    {searchResults.map((user : User) => (
                        <li
                            key={user.id}
                            className="flex items-center space-x-2 hover:bg-level1 cursor-pointer"
                        >
                            <button
                                className="flex w-full p-2 text-left"
                                onClick={() => setRecepient(user)}
                            >
                                <Avatar src={user.image} />

                                <div className="flex flex-col ml-2">
                                    <p className="text-primaryText">{user.name}</p>
                                    <p className="text-quaternaryText">@{user.username}</p>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul> :
                null
            }
        </div>
    )
}

export default ConversationInput;