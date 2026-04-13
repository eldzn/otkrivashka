'use client'

import { MapPin, MessageSquare, Phone } from "lucide-react";
import { Typography } from "@/src/core/ui/typography.ui";

export default function FooterComp() {
    return (
        <footer className="w-full bg-[#171B26] rounded-t-[40px] mt-auto">
            <div className="max-w-350 mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <MapPin size={20} className="text-[#C8963E]" />
                            <Typography size="medium-16" fontColor="white">
                                Адреса:
                            </Typography>
                        </div>
                        <Typography size="medium-16" fontColor="white">
                            г.Иркутск, Ул. Лермонтова, д.309 (Академгородок)
                        </Typography>

                        <Typography size="medium-16" fontColor="white">
                            г. Иркутск, ул. Рабочего штаба, д. 59/1
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Phone size={20} className="text-[#C8963E]" />
                            <Typography size="medium-16" fontColor="white">
                                +7 (3952) 744-703
                            </Typography>
                        </div>
                        <div className="flex items-center gap-3">
                            <MessageSquare size={20} className="text-[#C8963E]" />
                            <Typography size="medium-16" fontColor="white">
                                744703@bk.ru
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}