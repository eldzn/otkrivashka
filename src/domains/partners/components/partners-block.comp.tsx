'use client'

import {FC} from "react"
import Image from "next/image"
import {partnerItems} from "@/src/core/constants/partners-items"

export const PartnersBlockComp: FC = () => {
    return (
        <div className="my-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="max-w-500 mx-auto bg-[#FFFFFF] rounded-[40px] px-6 py-6">
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
                    {partnerItems.map((partner, index) => (
                        <Image
                            key={index}
                            src={partner.src}
                            alt={partner.alt}
                            width={140}
                            height={80}
                            priority
                            className="w-36 sm:w-38 md:w-42 lg:w-62 h-auto object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}