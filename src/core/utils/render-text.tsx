import { Typography } from "@/src/core/ui/typography.ui";

export const renderText = (text: string) => {
    const isList = text.includes(";");

    if (!isList) {
        return (
            <Typography
                size="medium-16"
                fontColor="gray"
                className="w-full text-left whitespace-pre-line break-words"
            >
                {text}
            </Typography>
        );
    }
    return (
        <ul className="w-full text-sm text-[#8C8C8C] text-left space-y-2 break-words">
            {text.split(";").map((point, idx) => {
                const clean = point.trim();
                if (!clean) return null;
                return (
                    <li key={idx} className="flex gap-2 leading-snug">
                        <span className="text-[#C8963E] shrink-0">•</span>
                        <span className="wrap-break-word">{clean}</span>
                    </li>
                );
            })}
        </ul>
    );
};