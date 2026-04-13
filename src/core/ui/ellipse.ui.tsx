'use client';

import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import Image from "next/image";

const ellipseVariants = cva('transition-all duration-300 overflow-hidden', {
    variants: {
        color: {
            'default': 'bg-[#D9D9D9]',
            'avatar-complaint': 'bg-[#FFFFFF] border border-[#4D4AE8]'
        },
        size: {
            'default': 'w-[140px] h-[140px]',
            'subscribe': 'w-[100px] h-[100px]',
            'menu': 'w-[40px] h-[40px]',
            'avatar': 'w-16 h-16',
            'avatar-complaint': 'w-10 h-10'
        },
        radius: {
            'default': 'rounded-full',
        },
    },
    defaultVariants: {
        color: 'default',
        size: 'default',
        radius: 'default',
    }
});

interface IProps extends VariantProps<typeof ellipseVariants> {
    className?: string;
    children?: React.ReactNode;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    unoptimized?: boolean;
}

export const Ellipse: FC<IProps> = ({color, size, radius, className, children, src, alt = '', width, height, unoptimized = false,}) => {
    return (
        <div className={ellipseVariants({ color, size, radius, className })}>
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    width={width || 128}
                    height={height || 128}
                    className="w-full h-full object-cover"
                    unoptimized={unoptimized}
                />
            ) : (
                children
            )}
        </div>
    );
};