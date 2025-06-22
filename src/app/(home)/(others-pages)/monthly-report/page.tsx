import ComponentCard from "@/components/common/ComponentCard";
import BasicTableOne from "@/components/tables/BasicTableOne";
import type { Metadata } from "next";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

const tableData = [
  {
    id: 1,
    hariKe: "Hari Ke-1",
    date: new Date('2024-08-05'),
    progress: 4.0,
    cumulativeProgress: 4.05,
  },
  {
    id: 2,
    hariKe: "Hari Ke-2",
    date: new Date('2024-08-06'),
    progress: 2.0,
    cumulativeProgress: 12.0,
  },
  {
    id: 3,
    hariKe: "Hari Ke-1",
    date: new Date('2024-08-07'),
    progress: 7.0,
    cumulativeProgress: 42.0,
  },
  {
    id: 4,
    hariKe: "Hari Ke-1",
    date: new Date('2024-08-08'),
    progress: 25.0,
    cumulativeProgress: 75.0,
  },
  {
    id: 5,
    hariKe: "Hari Ke-1",
    date: new Date('2024-08-09'),
    progress: 4.0,
    cumulativeProgress: 100.0,
  },
];
export default function LaporanBulanan() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center border-b border-gray-400 pb-4 mb-8">
        <h1 className="text-xl font-bold leading-tight">
          LAPORAN BULANAN
          <br />
          PENGAWASAN PEMBANGUNAN KANTOR POLRES PANGANDARAN TAHUN ANGGARAN 2024
          <br />
          Waktu Pelaksanaan : 10-12 Maret 2024
          <br />
          Tambahan Waktu: -
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
        <ComponentCard title="Laporan Bulanan">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
              <div className="">
                <Table>
                  <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                    <TableRow>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        No
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Hari Ke-
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Tanggal
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Progress Bulanan
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Progress Kumulatif
                      </TableCell>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {tableData.map((item, idx) => (
                      <TableRow key={item.id}>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                         {idx+1}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {item.hariKe}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {(() => {
                            const options: any = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
                            const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(item?.date);
                            return formattedDate
                          })()}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                          {(() => {
                            const percentStr = `${item?.progress}%`;
                            return percentStr
                          })()}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                            {(() => {
                            const percentStr = `${item?.cumulativeProgress}%`;
                            return percentStr
                          })()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </ComponentCard>
      </section>
    </div>
  );
}
