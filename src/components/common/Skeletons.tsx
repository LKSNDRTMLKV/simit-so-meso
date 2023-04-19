import React from 'react'

export const SkeletonAvatar = () => {
  return (
    <div className="relative mx-auto w-12 h-12 rounded-full space-y-3 overflow-hidden bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">

    </div>
  )
}
