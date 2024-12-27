import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHoursAndDate() {
  const date = new Date();
  const formatedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12

  const currentTime = `${hours}:${minutes} ${amPm}`;
  return {
    currentTime,
    formatedDate
  }
}

export const getRoleColor = (role: string) => {
  switch (role) {
    case "ADMIN":
      return "bg-sky-500 text-white";
    case "BORROWER":
      return "bg-green-500 text-white";
  }
}