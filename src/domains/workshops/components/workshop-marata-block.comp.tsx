'use client'

import { Typography } from "@/src/core/ui/typography.ui";

export const WorkshopMarataBlockComp = () => {
    return (
        <div className="mt-10 mb-10 px-5 sm:px-10 md:px-16 lg:px-20">
            <div className="flex flex-col w-full bg-white rounded-[40px] p-6 md:p-10 gap-6">
                <Typography size="extrabold-32" fontColor="blue">
                    Мастерская в Марата
                </Typography>
                <div className="flex flex-col gap-4 text-gray-700 whitespace-pre-line">
                    <Typography>
                        Для вашего удобства мы открываем мастерскую в Предместье Марата!
                    </Typography>
                    <Typography>
                        ул. Рабочего Штаба, 51
                    </Typography>
                    <Typography>
                        Изготовление ключей, а именно механическая нарезка «болванки» сувальдных (одно и двухбородочных), «французских» как простых, так и перфорированных (штифтовых и рамочных замков), а также ключей типа «финских», тубулярных, «помповых» и многих других.
                    </Typography>
                    <Typography>
                        Изготовим, как по образцу ключа, так и по замку, с его полной разборкой.
                    </Typography>
                    <Typography>
                        А еще мы заменим вам элементы питания в часах, брелках, ключах.
                    </Typography>
                    <Typography>
                        Предлагаем изготовление гардеробных номерков различной формы, цвета, размера, стиля и количества.
                    </Typography>
                </div>
            </div>
        </div>
    );
};