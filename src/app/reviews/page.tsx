'use client'

import {NextPage} from "next";
import HeaderComp from "@/src/core/components/header.comp";
import FooterComp from "@/src/core/components/footer.comp";
import {Typography} from "@/src/core/ui/typography.ui";
import {ReviewsBlockComp} from "@/src/domains/reviews/components/reviews-block.comp";

const ReviewsPage: NextPage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#FAF9F8]">
            <HeaderComp />
            <div className="px-5 sm:px-10 md:px-16 lg:px-20 mt-6 sm:mt-8 lg:mt-10">
                <Typography
                    tag="h1"
                    size="extrabold-56"
                    fontColor="blue"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    Отзывы клиентов
                </Typography>
            </div>
            <ReviewsBlockComp />
            <FooterComp />
        </div>
    )
}

export default ReviewsPage
