import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomNumber(minRange: number, maxRange: number) {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRange);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
