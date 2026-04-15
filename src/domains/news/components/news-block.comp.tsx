'use client'

import { FC } from "react";
import { Typography } from "@/src/core/ui/typography.ui";
import {renderText} from "@/src/core/utils/render-text";
import {newsItems} from "@/src/core/constants/news-item";

export const NewsBlockComp: FC = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="w-full bg-white rounded-[40px] p-6 md:p-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {newsItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="bg-[#F8F7F5] rounded-2xl p-6 flex flex-col gap-4 w-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-105 items-start text-left">
                                <Icon size={48} className="text-[#C8963E]" />
                                <Typography
                                    size="extrabold-32"
                                    fontColor="black"
                                    className="w-full text-left wrap-break-word"
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