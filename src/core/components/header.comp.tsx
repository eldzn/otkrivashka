'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Typography } from "@/src/core/ui/typography.ui"
import {cn} from "@/src/lib/utils"
import {menuItems} from "@/src/core/constants/menu-items"

export default function HeaderComp() {
    const pathname = usePathname()
    return (
        <div className="w-full bg-[#FAF9F8]">
            <div className="bg-[#FFFFFF] w-full">
                <div className="px-5 sm:px-10 md:px-16 lg:px-20 py-4 sm:py-6">
                    <div className="flex flex-col min-[1401px]:flex-row items-start min-[1401px]:items-center gap-y-5">
                        <div className="shrink-0 flex justify-start">
                            <Image
                                src="/header/logo-company.png"
                                alt="Логотип компании"
                                width={300}
                                height={113}
                                priority
                                className="w-40 md:w-55 lg:w-70 xl:w-75 h-auto object-contain"
                            />
                        </div>
                        <nav className="flex flex-wrap items-center justify-start min-[1401px]:justify-end w-full gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 mt-5 min-[1401px]:mt-0">
                            {menuItems.map(({ label, path }) => {
                                const isActive = pathname === path
                                return (
                                    <Link
                                        key={path}
                                        href={path}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <Typography
                                            tag="span"
                                            className={cn(`whitespace-nowrap font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]`, isActive ? "text-[#C8963E]" : "text-black")}
                                        >
                                            {label}
                                        </Typography>
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="px-5 sm:px-10 md:px-16 lg:px-20 mt-6 sm:mt-8 lg:mt-10">
                <Typography
                    tag="h1"
                    size="extrabold-56"
                    fontColor="blue"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    Партнеры
                </Typography>
            </div>
        </div>
    );
}