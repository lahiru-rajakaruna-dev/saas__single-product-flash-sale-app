import {
    clsx,
    type ClassValue
}                  from 'clsx'
import { twMerge } from 'tailwind-merge'



export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function keyGenerator(...values: string[]) {
    return `${ Math.floor(Math.random() * 1_000_000_000) }-` + values.join('-')
}


export type Prettify<T> = {
                              [k in keyof T]: T[k];
                          } & {}