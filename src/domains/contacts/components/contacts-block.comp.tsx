'use client'

import { FC } from "react";
import { Bus, LucideMail, MapPin, Phone } from "lucide-react";
import { Typography } from "@/src/core/ui/typography.ui";
import { Map } from "@/src/domains/contacts/components/map";

export const ContactsBlockComp: FC = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                    <div className="flex-1 bg-white rounded-[40px] p-5 flex flex-col gap-3">
                        <div className="flex gap-3 items-center">
                            <Phone size={18} className="text-[#C8963E]" />
                            <Typography size="medium-16">
                                +7 (3952) 744-703, +8 (902) 560-47-03
                            </Typography>
                        </div>

                        <div className="flex gap-3 items-center">
                            <LucideMail size={18} className="text-[#C8963E]" />
                            <Typography size="medium-16">
                                744703@bk.ru, alex-166@list.ru
                            </Typography>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-[40px] p-5 flex flex-col gap-3">
                        <div className="flex gap-3 items-start">
                            <MapPin size={18} className="text-[#C8963E] mt-1" />
                            <Typography size="medium-16">
                                г. Иркутск, ул. Лермонтова, д.309
                            </Typography>
                        </div>
                        <div className="flex gap-3 items-start">
                            <MapPin size={18} className="text-[#C8963E] mt-1" />
                            <Typography size="medium-16">
                                г. Иркутск, ул. Рабочего штаба, д. 59/1
                            </Typography>
                        </div>
                        <div className="flex gap-3 items-start">
                            <MapPin size={18} className="text-[#C8963E] mt-1" />
                            <Typography size="medium-16">
                                г. Иркутск, ул. Фурье 16
                            </Typography>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-[40px] p-5 flex flex-col gap-3">
                        <div className="flex gap-3 items-start">
                            <Bus size={18} className="text-[#C8963E] mt-1" />
                            <Typography size="medium-16">
                                Автобусы: 77, 18, 18с, 55, 57, 80, 80к, 24, 40, 10т
                            </Typography>
                        </div>
                        <div className="flex gap-3 items-start">
                            <Bus size={18} className="text-[#C8963E] mt-1" />
                            <Typography size="medium-16">
                                Маршрутки: 99, 95, 85, 3, 72, 45, 84, 94
                            </Typography>
                        </div>
                        <div className="flex gap-3 items-start">
                            <Bus size={18} className="text-[#C8963E] mt-1" />
                            <Typography size="medium-16">
                                Троллейбусы: 10к, 6, 1, 10, 6а, 7
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="w-full h-100 rounded-[40px] overflow-hidden">
                    <Map />
                </div>
            </div>
        </div>
    )
}