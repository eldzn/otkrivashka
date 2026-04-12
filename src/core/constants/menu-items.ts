export type MenuItem = {
    label: string;
    path: string;
};

export const menuItems: MenuItem[] = [
    { label: "Главная", path: "/" },
    { label: "Услуги", path: "/services" },
    { label: "Документы", path: "/documents" },
    { label: "Отзывы", path: "/reviews" },
    { label: "Партнеры", path: "/partners" },
    { label: "Новости", path: "/news" },
    { label: "Мастерские", path: "/workshops" },
    { label: "Контакты", path: "/contacts" }
];