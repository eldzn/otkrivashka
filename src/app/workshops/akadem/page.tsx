import HeaderComp from "@/src/core/components/header.comp";
import FooterComp from "@/src/core/components/footer.comp";
import { WorkshopBlockComp } from "@/src/domains/workshops/components/workshop-block.comp";
import {NextPage} from "next";

const AkademPage: NextPage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#FAF9F8]">
            <HeaderComp />
            <WorkshopBlockComp />
            <FooterComp />
        </div>
    );
}

export default AkademPage