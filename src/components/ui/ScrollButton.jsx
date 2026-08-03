import React, { useEffect, useState } from "react";

import { ArrowIcon } from "../icons/icons";

export const ScrollButton = () => {
    const [isNearBottom, setIsNearBottom] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let animationFrameId = null;

        const updateScrollState = () => {
            animationFrameId = null;

            const documentElement = document.documentElement;
            const currentScroll = Math.max(window.scrollY, 0);
            const maximumScroll = Math.max(
                documentElement.scrollHeight - window.innerHeight,
                0
            );

            const progress =
                maximumScroll === 0
                    ? 100
                    : Math.min((currentScroll / maximumScroll) * 100, 100);

            const nearBottom =
                maximumScroll === 0 ||
                maximumScroll - currentScroll <= 120;

            setScrollProgress(progress);
            setIsNearBottom(nearBottom);
        };

        const handleScrollOrResize = () => {
            if (animationFrameId === null) {
                animationFrameId = window.requestAnimationFrame(
                    updateScrollState
                );
            }
        };

        updateScrollState();

        window.addEventListener("scroll", handleScrollOrResize, {
            passive: true,
        });
        window.addEventListener("resize", handleScrollOrResize);

        return () => {
            window.removeEventListener("scroll", handleScrollOrResize);
            window.removeEventListener("resize", handleScrollOrResize);

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const handleClick = () => {
        const targetPosition = isNearBottom
            ? 0
            : document.documentElement.scrollHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    };

    const actionLabel = isNearBottom
        ? "Kembali ke bagian atas"
        : "Scroll ke bagian bawah";

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={actionLabel}
            title={actionLabel}
            className="group fixed right-4 bottom-5 z-50 h-15 w-15 rounded-full p-[2px] shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 active:scale-95 sm:right-6 sm:bottom-6"
            style={{
                background: `conic-gradient(
                    rgb(220 38 38) ${scrollProgress * 3.6}deg,
                    rgb(64 64 64 / 0.8) 0deg
                )`,
            }}
        >
            <span className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-neutral-950 text-white transition-colors duration-300 group-hover:bg-red-700">
                <ArrowIcon
                    className={`h-6 w-6 transition-transform duration-300 ${
                        isNearBottom ? "rotate-180" : ""
                    }`}
                />
            </span>
        </button>
    );
};