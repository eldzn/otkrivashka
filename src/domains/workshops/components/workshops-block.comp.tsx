'use client'

import {WorkshopCard} from "@/src/domains/workshops/components/workshop-card.comp";

export const WorkshopsBlockComp = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="flex flex-col md:flex-row gap-6">
                <WorkshopCard
                    title="Мастерская в Академгородке"
                    address="г. Иркутск, ул. Лермонтова, 309"
                    phone="+7 (3952) 902-703"
                    href="/workshops/akadem"
                />
                <WorkshopCard
                    title="Мастерская в Марата"
                    address="г. Иркутск, ул. Рабочего Штаба, 51"
                    schedule={{
                        weekdays: "Пн–Сб: 10:00 — 19:00",
                        sunday: "Вс: 10:00 — 18:00"
                    }}
                    href="/workshops/marata"
                />
            </div>
        </div>
    );
};