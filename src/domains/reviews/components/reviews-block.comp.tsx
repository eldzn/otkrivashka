'use client'

import { FC } from "react";
import { Ellipse } from "@/src/core/ui/ellipse.ui";
import { Typography } from "@/src/core/ui/typography.ui";
import { Clock } from "lucide-react";
import {reviewsItems} from "@/src/core/constants/reviews-items";

export const ReviewsBlockComp: FC = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="w-full bg-white rounded-[40px]">
                <div className="flex flex-wrap gap-6 p-6 md:p-10">
                    {reviewsItems.map((review, idx) => (
                        <div key={idx} className={review.center ? "w-full md:w-[calc(50%-12px)] mx-auto bg-[#F8F7F5] rounded-2xl p-6 flex flex-col gap-4 md:col-span-2 md:max-w-150" : "w-full md:w-[calc(50%-12px)] bg-[#F8F7F5] rounded-2xl p-6 flex flex-col gap-4"}>
                            <div className="flex items-center gap-4">
                                <Ellipse size="subscribe" radius="default" src={review.img} />
                                <div className="flex items-center h-full">
                                    <Typography size="bold-24" fontColor="black">
                                        {review.name}
                                    </Typography>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Typography size="medium-16" fontColor="gray">
                                    {review.text}
                                </Typography>
                            </div>
                            <div className="flex items-center gap-2 text-[#8C8C8C]">
                                <Clock size={16} />
                                <span className="text-sm">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}