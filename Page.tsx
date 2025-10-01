"use client";
import React from "react";

export default function JurnalMengajar() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-3 gap-6">
        {/* Jurnal Mengajar */}
        <div className="col-span-2 bg-white rounded-xl shadow p-4">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-semibold text-black">
              Jurnal Mengajar
            </h2>
            <div className="flex space-x-3">
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>XI RPL 4</option>
                <option>XI RPL 3</option>
              </select>
              <input
                type="date"
                className="border rounded-md px-3 py-1 text-sm"
                defaultValue="2025-09-29"
              />
            </div>
          </div>

          {/* Status Kehadiran & Jurnal */}
          <div className="flex items-center justify-center mt-4 text-gray-700">
            {/* Status Kehadiran */}
            <div className="flex space-x-6">
              <span className="flex items-center space-x-1">
                <p className="text-2xl font-bold text-indigo-700">0</p>
                <p className="text-sm">: Hadir</p>
              </span>
              <span className="flex items-center space-x-1">
                <p className="text-2xl font-bold text-indigo-700">0</p>
                <p className="text-sm">: Tidak Hadir</p>
              </span>
            </div>

            {/* Garis Pemisah */}
            <div className="mx-6 border-l h-10 border-gray-300"></div>

            {/* Status Jurnal */}
            <div className="flex space-x-6">
              <span className="flex items-center space-x-1">
                <p className="text-2xl font-bold text-indigo-700">0</p>
                <p className="text-sm">: Belum</p>
              </span>
              <span className="flex items-center space-x-1">
                <p className="text-2xl font-bold text-indigo-700">0</p>
                <p className="text-sm">: Draft</p>
              </span>
              <span className="flex items-center space-x-1">
                <p className="text-2xl font-bold text-indigo-700">0</p>
                <p className="text-sm">: Simpan</p>
              </span>
            </div>
          </div>
        </div>

        {/* Guru Terbaik */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Guru Terbaik</h3>
            <p className="text-gray-500 text-sm">Belum ada guru terbaik</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
            alt="Guru"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}
