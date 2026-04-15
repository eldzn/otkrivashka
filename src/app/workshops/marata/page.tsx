import HeaderComp from "@/src/core/components/header.comp";
import FooterComp from "@/src/core/components/footer.comp";
import { WorkshopMarataBlockComp } from "@/src/domains/workshops/components/workshop-marata-block.comp";
import {NextPage} from "next";

const MarataPage: NextPage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#FAF9F8]">
            <HeaderComp />
            <WorkshopMarataBlockComp />
            <FooterComp />
        </div>
    );
}

export default MarataPage