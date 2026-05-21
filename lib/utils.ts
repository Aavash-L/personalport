import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export const BUILD_DATE = new Date().toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
}).toUpperCase();
