'use client'

import { Typography } from "@/src/core/ui/typography.ui";

export const WorkshopInfoBlock = () => {
    return (
        <div className="flex flex-col w-full bg-[#FAF9F8] rounded-[40px] p-5 md:p-6 gap-4">
            <div className="flex items-center gap-2">
                <Typography size="bold-18" fontColor="black">
                    Адрес:
                </Typography>
                <Typography className="text-gray-600">
                    г. Иркутск, Ул. Лермонтова, д.309 (ост. Академгородок)
                </Typography>
            </div>
            <div className="flex items-center gap-2">
                <Typography size="bold-18" fontColor="black">
                    Телефон:
                </Typography>
                <Typography className="text-gray-600">
                    +7 (3952) 902-703, 8-964-650-27-03
                </Typography>
            </div>
            <div className="flex items-center gap-2">
                <Typography size="bold-18" fontColor="black">
                    Оплата:
                </Typography>
                <Typography className="text-gray-600">
                    наличными, Visa, MasterCard, Visa Electron, Maestro, безналичный расчет
                </Typography>
            </div>
        </div>
    );
};