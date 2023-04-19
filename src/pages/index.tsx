import React, { useEffect, useCallback } from 'react'
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import SignInForm from "~/components/auth/SignInForm";
import Navbar from "~/components/layout/Navbar/Navbar";
import useSearchUser from "~/hooks/useSearchUser";
import { api } from "~/utils/api";
// import Random from '~/components/common/Random';


const Home: NextPage = () => {
  const { data: sessionData, status: sessionStatus } = useSession();

  const { values: { name, username, image },
    setValues,
    handleChange
  } = useSearchUser({
    name: "",
    username: "",
    image: "",
  })

  // let randomNumbers = []

  // for(let i = 0; i < 100; i++) {
  //   randomNumbers.push(Math.floor(Math.random() * 1000))
  // }

  // const randomNumbers:number[] = localStorage.getItem("randomNumber")
  // function longestSubArray(arr) {
  //   let max = []
  //   let cur = []
   
  //   for(let i = 0; i < randomNumbers.length; i++) {
  //     if(arr[i] > arr[i-1]) {
  //       cur.push(arr[i])
  //     }
  //     else {
  //       if(cur.length > max.length) {
  //         max = cur
  //       }
  //       cur = [arr[i]]
  //     }
  //   }
  //   // if(cur.length > max.length) {
  //   //   max = cur
  //   // }
  //   return max
  // }

  // console.log(randomNumbers)
  // console.log(longestSubArray(randomNumbers))
  // const randomNumbers:number[] = [];

// for (let i = 0; i < 20; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 100));
// }
// localStorage.setItem("randomNumbers", randomNumbers)


  // const setValueCallback = useUpdateUserValues(sessionData?.user, setValues)

  const changeUserData = api.user.changeUserData.useMutation();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    changeUserData.mutate({
      name: (name || undefined) ?? "",
      username: (username || undefined) ?? "",
      image: (image || undefined) ?? "",
    });
  }

  useEffect(() => {
    if (sessionData?.user) {
      setValues({
        name: sessionData.user.name,
        username: sessionData.user.username,
        image: sessionData.user.image,
      })
    }
  }, [sessionData, setValues])


  // const setValueCallback = useCallback(() => {
  //   if (sessionData?.user) {
  //     setValues({
  //       name: sessionData.user.name ?? "",
  //       username: sessionData.user.username ?? "",
  //       image: sessionData.user.image ?? "",
  //     })
  //   }

  // }, [sessionData, setValues]);

  // useEffect(() => {
  //   setValueCallback();
  // }, [setValueCallback]);




  // console.log(sessionData)

  return (
    <>
      <Head>
        <title>Simit so Meso</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto min-h-screen flex flex-col items-center justify-center p-4">
        <div className="flex w-full flex-col md:flex-row items-center md:justify-evenly justify-center pt-6 text-2xl text-blue-500 space-y-8 text-center">
          <h1 className="text-3xl font-bold">Welcome to Simit so Meso!</h1>
          <SignInForm name={name!} username={username!} image={sessionData?.user?.image} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
{/* 
        <div className='relative'>
          <Random />
        </div> */}
       
      </main>

      <AuthShowcase />
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  // console.log(sessionData)

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined },
  // );


  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-20">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {/* {secretMessage && <span> - {secretMessage}</span>} */}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
