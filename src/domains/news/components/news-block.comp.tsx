'use client'

import { FC } from "react";
import { Percent, ArrowRightLeft, ArrowUpRight } from "lucide-react";
import { Typography } from "@/src/core/ui/typography.ui";
import { ItemType, newsItems } from "@/src/core/constants/news-item";

const iconMap: Record<ItemType, React.ElementType> = {
    discount: Percent,
    purchase: ArrowRightLeft,
    benefits: ArrowUpRight,
};

const renderText = (text: string) => {
    const isList = text.includes(";");
    if (!isList) {
        return (
            <Typography
                size="medium-16"
                fontColor="gray"
                className="w-full text-left whitespace-pre-line break-words"
            >
                {text}
            </Typography>
        );
    }
    return (
        <ul className="w-full text-sm text-[#8C8C8C] text-left space-y-2 break-words">
            {text.split(";").map((point, idx) => {
                const clean = point.trim();
                if (!clean) return null;

                return (
                    <li key={idx} className="flex gap-2 leading-snug">
                        <span className="text-[#C8963E] shrink-0">•</span>
                        <span className="break-words">{clean}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export const NewsBlockComp: FC = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="w-full bg-white rounded-[40px] p-6 md:p-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {newsItems.map((item, i) => {
                        const Icon = iconMap[item.type];
                        return (
                            <div key={i} className="bg-[#F8F7F5] rounded-2xl p-6 flex flex-col gap-4 w-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-105 items-start text-left">
                                <Icon size={48} className="text-[#C8963E]" />
                                <Typography
                                    size="extrabold-32"
                                    fontColor="black"
                                    className="w-full text-left break-words"
                                >
                                    {item.title}
                                </Typography>

                                {renderText(item.text)}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};