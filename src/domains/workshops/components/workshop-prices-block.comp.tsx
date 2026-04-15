'use client';

import { Typography } from "@/src/core/ui/typography.ui";

export const WorkshopPricesBlock = ({items}: {items: { title: string; price: string }[];}) => {
    return (
        <div className="flex flex-col w-full bg-[#FAF9F8] rounded-[40px] overflow-hidden">
            {items.map((item, i) => (
                <div key={i} className="flex items-center px-5 py-4 border-b border-gray-200">
                    <Typography className="text-gray-700 flex-1 pr-6">
                        {item.title}
                    </Typography>
                    <Typography className="text-[#C8963E] font-semibold whitespace-nowrap ml-auto">
                        {item.price}
                    </Typography>
                </div>
            ))}
        </div>
    );
};