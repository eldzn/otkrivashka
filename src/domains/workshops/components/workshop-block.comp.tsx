'use client'

import { Typography } from "@/src/core/ui/typography.ui";
import {WorkshopInfoBlock} from "@/src/domains/workshops/components/workshop-info-block.comp";
import {WorkshopTransportBlock} from "@/src/domains/workshops/components/workshop-transport-block";
import {WorkshopPricesBlock} from "@/src/domains/workshops/components/workshop-prices-block.comp";
import {keyPrices} from "@/src/core/constants/workshop.data";
export const WorkshopBlockComp = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="flex flex-col w-full bg-white rounded-[40px] p-6 md:p-10 gap-6">
                <Typography size="extrabold-32" fontColor="blue">
                    Мастерская в Академгородке
                </Typography>
                <WorkshopInfoBlock />
                <Typography size="extrabold-32" fontColor="blue">
                    Как добраться
                </Typography>
                <WorkshopTransportBlock />
                <Typography size="extrabold-32" fontColor="blue">
                    Изготовление дубликатов ключей для дома и офиса
                </Typography>
                <WorkshopPricesBlock items={keyPrices} />
            </div>
        </div>
    );
};