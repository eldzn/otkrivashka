'use client'

import React, {FC} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/src/lib/utils";

const typographyVariants = cva('', {
    variants: {
        size: {
            'regular-20': 'text-[20px] font-normal',
            'regular-24': 'text-[24px] font-normal',
            'medium-14': 'text-[14px] font-medium',
            'medium-16': 'text-[16px] font-medium',
            'medium-18': 'text-[18px] font-medium',
            'medium-20': 'text-[20px] font-medium',
            'medium-22': 'text-[22px] font-medium',
            'medium-28': 'text-[28px] font-medium',
            'medium-40': 'text-[40px] font-medium',
            'semi-bold-18': 'text-[18px] font-semibold',
            'semi-bold-24': 'text-[24px] font-semibold',
            'semi-bold-32': 'text-[32px] font-semibold',
            'semi-bold-36': 'text-[36px] font-semibold',
            'semi-bold-40': 'text-[40px] font-semibold',
            'bold-14': 'text-[14px] font-bold',
            'bold-16': 'text-[16px] font-bold',
            'bold-18': 'text-[18px] font-bold',
            'bold-20': 'text-[20px] font-bold',
            'bold-24': 'text-[24px] font-bold',
            'bold-26': 'text-[26px] font-bold',
            'extrabold-56': 'text-[56px] font-extrabold',
        },
        fontColor: {
            'black': 'text-[#000000]',
            'blue': 'text-[#1F2937]',
            'red': 'text-[#F13E3E]',
            'gray': 'text-[#777777]',
            'white': 'text-[#FFFFFF]',
            'purple': 'text-[#6E5B8E]',
            'gold': 'text-[#C8963E]',
        }
    },
    defaultVariants: {
        size: 'regular-20',
        fontColor: 'black',
    }
})

type TTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'div' | 'label'

interface IProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
    children: React.ReactNode,
    tag?: TTag,
}

export const Typography: FC<IProps> = ({children, tag = 'p', size, fontColor, className, ...props}) => {
    const Tag = tag

    return (
        <Tag
            {...props}
            className={cn(
                typographyVariants({size, fontColor}),
                className
            )}
        >
            {children}
        </Tag>
    )
}