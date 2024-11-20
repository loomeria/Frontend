'use client'
import React, { useState, useRef } from 'react'

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const children = carouselRef.current.children
            if (children[index]) {
                children[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                })
                setCurrentIndex(index)
            }
        }
    }

    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1)
        }
    }

    const scrollRight = () => {
        if (carouselRef.current) {
            const children = carouselRef.current.children
            if (currentIndex < children.length - 1) {
                scrollToIndex(currentIndex + 1)
            }
        }
    }

    return (
        <div className="relative w-full">
            {currentIndex > 0 && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 rounded-full p-2"
                >
                    ←
                </button>
            )}

            <div ref={carouselRef} className="flex space-x-4 overflow-x-auto scrollbar-hide h-96 mb-4 pb-10 scroll-smooth">
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl ml-20 p-4 min-w-[500px] shrink-0"/>
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 min-w-[500px] shrink-0"/>
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 min-w-[500px] shrink-0"/>
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 min-w-[500px] shrink-0"/>
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 min-w-[500px] shrink-0"/>
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 min-w-[500px] shrink-0"/>
                <div className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 min-w-[500px] shrink-0"/>
            </div>

            {currentIndex < 6 && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 rounded-full p-2"
                >
                    →
                </button>
            )}
        </div>
    )
}