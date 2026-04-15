'use client'

import { useEffect, useRef } from "react";

export const Map = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!mapRef.current) return;
        window.ymaps?.ready(() => {
            const map = new window.ymaps.Map(mapRef.current, {
                center: [52.286974, 104.305018],
                zoom: 13,
            });
            const points = [
                [52.286974, 104.305018],
                [52.297800, 104.296000],
                [52.283000, 104.289000],
            ];
            points.forEach((coords) => {
                const placemark = new window.ymaps.Placemark(coords);
                map.geoObjects.add(placemark);
            });
        });
    }, []);
    return (
        <div
            ref={mapRef}
            className="w-full h-[400px] rounded-3xl overflow-hidden"
        />
    );
};