'use client'

import { Typography } from "@/src/core/ui/typography.ui";

export const WorkshopTransportBlock = () => {
    return (
        <div className="flex flex-col w-full bg-[#FAF9F8] rounded-[40px] p-5 md:p-6 gap-4">
            <div className="flex items-center gap-2">
                <Typography size="bold-18" fontColor="black">
                    Автобусы:
                </Typography>
                <Typography className="text-gray-600">
                    77, 18, 18с, 55, 57, 80, 80к, 24, 40, 10т
                </Typography>
            </div>
            <div className="flex items-center gap-2">
                <Typography size="bold-18" fontColor="black">
                    Маршрутки:
                </Typography>
                <Typography className="text-gray-600">
                    99, 95, 85, 3, 72, 45, 84, 94
                </Typography>
            </div>
            <div className="flex items-center gap-2">
                <Typography size="bold-18" fontColor="black">
                    Троллейбусы:
                </Typography>
                <Typography className="text-gray-600">
                    10к, 6, 1, 10, 6а, 7
                </Typography>
            </div>
        </div>
    );
};