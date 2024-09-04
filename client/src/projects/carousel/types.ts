import { ReactElement } from "react";

export interface SliderProps<T> {
    slides: T[]
    renderCard: (item: T, index:number) => ReactElement
}

export interface CarouselProps {
    slides: string[];
    intervalTime?: number
}