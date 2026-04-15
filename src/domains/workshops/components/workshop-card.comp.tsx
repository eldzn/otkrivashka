'use client'

import {FC} from "react";
import {MapPin, Phone, Clock} from "lucide-react";
import {Typography} from "@/src/core/ui/typography.ui";
import Link from "next/link";

interface WorkshopCardProps {
    title: string;
    address: string;
    phone?: string;
    schedule?: {
        weekdays: string;
        sunday: string;
    };
    href: string;
}

export const WorkshopCard: FC<WorkshopCardProps> = ({title, address, phone, schedule, href}) => {
    return (
        <div className="w-full bg-white rounded-[40px]">
            <Link href={href}>
                <div className="flex flex-col items-center gap-6 p-6 md:p-10">
                    <MapPin size={80} className="text-[#C8963E]"/>
                    <Typography size="extrabold-32" fontColor="blue">
                        {title}
                    </Typography>
                    <Typography size="medium-18" fontColor="gray">
                        {address}
                    </Typography>
                    {phone && (
                        <div className="flex items-center gap-2">
                            <Phone size={20} className="text-[#C8963E]"/>
                            <Typography size="medium-18" fontColor="gray">
                                {phone}
                            </Typography>
                        </div>
                    )}
                    {schedule && (
                        <div className="flex flex-col items-center gap-2 pt-4">
                            <div className="flex items-center gap-2 text-[#C8963E]">
                                <Clock size={20} className="text-[#C8963E]"/>
                                <Typography size="medium-18" fontColor="gray">
                                    Режим работы
                                </Typography>
                            </div>
                            <Typography size="medium-18" fontColor="gray">
                                {schedule.weekdays}
                            </Typography>
                            <Typography size="medium-18" fontColor="gray">
                                {schedule.sunday}
                            </Typography>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
};