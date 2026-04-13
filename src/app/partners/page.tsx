'use client'

import {NextPage} from "next";
import HeaderComp from "@/src/core/components/header.comp";
import {PartnersBlockComp} from "@/src/domains/partners/components/partners-block.comp";
import FooterComp from "@/src/core/components/footer.comp";

const PartnersPage: NextPage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#FAF9F8]">
            <HeaderComp />
            <PartnersBlockComp />
            <FooterComp />
        </div>
    )
}

export default PartnersPage