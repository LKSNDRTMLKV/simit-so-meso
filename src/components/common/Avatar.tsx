import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { type DetailedHTMLProps, type ImgHTMLAttributes } from "react";
import { SkeletonAvatar } from "./Skeletons";

interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src: string,
    alt?: string,
    parent?: boolean,
    className?: string,
    status?: string,
}

type Props = ImageProps 


const Avatar = ({ src, alt, parent = true, className, status }: Props) => {
    const { status: sessionStatus } = useSession()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            setLoading(false)
        }
    }, [sessionStatus])


    return (
        // <Image
        //     width={32}
        //     height={32}
        //     src={src}
        //     alt={alt ? alt : "avatar"}
        //     className={`h-8 w-8 rounded-full 
        //     ${className ? className : ''}`}
        //     // placeholder='blur'

        // />
        loading && !src ? (
            <SkeletonAvatar />
        ) : (
            parent ?
            <div className={"flex items-center justify-center w-12 h-12 min-w-fit relative"}>
                <Image
                    width={1000}
                    height={1000}
                    src={src || ""}
                    alt={alt ? alt : "avatar"}
                    className={`${className ? className : 'h-12 w-12 rounded-full '}`}
                />
                {status &&
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-500"></div>}

            </div> :
            <>
                <Image
                    width={1000}
                    height={1000}
                    src={src || ""}
                    alt={alt ? alt : "avatar"}
                    className={`${className ? className : 'h-12 w-12 rounded-full '}`}
                />
                {status &&
                    <div className="absolute bottom-0 left-12 w-4 h-4 bg-green-500 rounded-full z-10 border-slate-800 border"></div>}

            </>
        )

       


    )
}

export default Avatar;