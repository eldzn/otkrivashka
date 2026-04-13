export type DocumentItem = {
    title: string;
    text: string;
    icon: string;
    file?: string;
};

export const documentsItems: DocumentItem[] = [
    {
        title: "Благодарность ВТБ",
        text: "За многолетнее сотрудничество по обслуживанию банковского оборудования.",
        icon: "star",
        file: "/documents/file/vtb.pdf",
    },
    {
        title: "Заключение договора с юр.лицами",
        text: "Заключение договора с юр.лицами на сервисное обслуживание банковского оборудования",
        icon: "note",
        file: "/documents/file/zakluchenie.docx",
    },
    {
        title: "Благодарность АТБ",
        text: "За многолетнее сотрудничество по обслуживанию банковского оборудования.",
        icon: "star",
        file: "/documents/file/blagodarnost-aziatsko-tihookeanskii-bank.pdf",
    },
    {
        title: "Благодарность Сбербанк",
        text: "Благодарность Сбербанк России",
        icon: "star",
        file: "/documents/file/blagodarnost-sberbank-rossii.pdf",
    },
]