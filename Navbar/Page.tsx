"use client";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white px-10 py-5">
      <div className="flex items-center gap-3">
        <img src="./Asset/telkom.png" alt="logo" className="w-8" />
        <h1 className="font-bold text-black text-lg">
          SMK TELKOM MAKASSAR
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-white font-bold">O</span>
        </div>
        <span className="font-semibold text-sm text-black">AlmaaSnoopy</span>
        <svg
          xmlns="#"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
}
