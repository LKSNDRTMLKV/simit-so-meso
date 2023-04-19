import React from 'react'
import { type InputLabels } from '~/interfaces/InputLabels'
import Avatar from '../common/Avatar'

const SignInForm = ({ name, username, image, handleChange, handleSubmit }: InputLabels) => {
    return (
        <form
            className='bg-level1 shadow-sm p-8 flex flex-col space-y-6 rounded-xl'
            onSubmit={handleSubmit}
        >
            <div>
                {/* <img src={image} alt='user' className='w-24 h-24 rounded-full mx-auto' /> */}
                {/* <Image src={image!} alt="user" width={1000} height={1000} className='w-32 h-32 rounded-full mx-auto' /> */}
                <Avatar alt='user' src={image!} className='w-32 h-32 rounded-full mx-auto' parent={false} />
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor='name' className='text-sm font-medium text-neutral-500'>
                    Name
                </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name ?? ""}
                    onChange={handleChange}
                    className='w-full px-3 py-2 text-neutral-900 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor='username' className='text-sm font-medium text-neutral-500'>
                    Username
                </label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    value={username ?? ""}
                    onChange={handleChange}
                    className='w-full px-3 py-2 text-neutral-900 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                />
            </div>
            <div className='flex flex-col space-y-2'>

                <label htmlFor='image' className='text-sm font-medium text-neutral-500'>
                    Image
                </label>
                <input
                    type='text'
                    name='image'
                    id='image'
                    value={image ?? ""}
                    onChange={handleChange}
                    className='w-full px-3 py-2 text-neutral-900 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                />
            </div>
            <div className='mt-6'>
                <button
                    type='submit'
                    className='w-full px-3 py-4 mt-4 text-sm font-medium text-level5 border bg-primary-500 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'

                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default SignInForm