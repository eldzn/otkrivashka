'use client'

import { FC } from "react";
import { Typography } from "@/src/core/ui/typography.ui";
import { CircleStar, NotepadTextDashed } from "lucide-react";
import { documentsItems } from "@/src/core/constants/documents-items";

const Icon = ({ type }: { type: string }) => {
    if (type === "note")
    return <NotepadTextDashed size={80} className="text-[#C8963E] shrink-0" />
    return <CircleStar size={80} className="text-[#C8963E] shrink-0" />
}

export const DocumentsBlockComp: FC = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="w-full bg-white rounded-[40px]">
                <div className="flex flex-wrap gap-6 p-4 sm:p-6 md:p-10">
                    {documentsItems.map((doc, i) => (
                        <a key={i} href={doc.file} target="_blank" rel="noopener noreferrer" className="w-full md:basis-[calc(50%-12px)] grow bg-[#F8F7F5] rounded-2xl p-5 sm:p-6 md:p-8 flex items-center gap-4 sm:gap-6 cursor-pointer hover:opacity-80 transition">
                            <Icon type={doc.icon} />
                            <div className="flex flex-col gap-1 sm:gap-2">
                                <Typography
                                    size="extrabold-32"
                                    fontColor="black"
                                    className="text-xl sm:text-2xl md:text-3xl leading-tight"
                                >
                                    {doc.title}
                                </Typography>
                                <Typography
                                    size="medium-16"
                                    fontColor="gray"
                                    className="text-sm sm:text-base"
                                >
                                    {doc.text}
                                </Typography>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}