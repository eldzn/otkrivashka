'use client'

import {NextPage} from "next";
import HeaderComp from "@/src/core/components/header.comp";
import {PartnersBlockComp} from "@/src/domains/partners/components/partners-block.comp";

const PartnersPage: NextPage = () => {
    return (
        <div className="flex flex-col w-full h-full bg-[#FAF9F8]">
            <HeaderComp />
            <PartnersBlockComp />
        </div>
    )
}

export default PartnersPage