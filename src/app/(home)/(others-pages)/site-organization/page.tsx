import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function MonthlyReport() {
 return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center border-b border-gray-400 pb-4 mb-8">
        <h1 className="text-xl font-bold leading-tight">
          Site Organization
        </h1>
      </div>

      {/* Box with text, image, and description columns */}
      <section className="mb-10">
        {/* Description columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold text-center">Pemilik Kerjaan</p>
              <div>
                {/* Replace the src with your actual image path or URL */}
                <img
                  src="https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740"
                  alt="Related visual"
                  className="w-full object-cover rounded"
                />
              </div>
            <p className="text-center">Description or content for column 1.</p>
          </div>
          <div>
            <p className="font-semibold text-center">Konsultan Pengawas</p>
              <div>
                {/* Replace the src with your actual image path or URL */}
                <img
                  src="https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740"
                  alt="Related visual"
                  className="w-full object-cover rounded"
                />
              </div>
            <p className="text-center">Description or content for column 2.</p>
          </div>
          <div>
            <p className="font-semibold text-center">Kontraktor Pelaksana</p>
            <div>
                {/* Replace the src with your actual image path or URL */}
                <img
                  src="https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740"
                  alt="Related visual"
                  className="w-full object-cover rounded"
                />
              </div>
            <p className="text-center">Description or content for column 3.</p>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section>
        <table className="min-w-full border border-gray-300 rounded overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 py-2 px-4 text-left">No.</th>
              <th className="border border-gray-300 py-2 px-4 text-left">Hari Ke-</th>
              <th className="border border-gray-300 py-2 px-4 text-left">Tanggal</th>
              <th className="border border-gray-300 py-2 px-4 text-left">Progress Bulanan</th>
              <th className="border border-gray-300 py-2 px-4 text-left">Progress Kumulatif</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row; add your real data here */}
            <tr>
              <td className="border border-gray-300 py-2 px-4">1</td>
              <td className="border border-gray-300 py-2 px-4">1</td>
              <td className="border border-gray-300 py-2 px-4">10 Maret 2024</td>
              <td className="border border-gray-300 py-2 px-4">50%</td>
              <td className="border border-gray-300 py-2 px-4">50%</td>
            </tr>
            {/* Additional rows should be added similarly */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
