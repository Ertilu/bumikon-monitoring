"use client";
import React, { useState } from "react";

const organization = {
  name: "CEO",
  children: [
    {
      name: "CTO",
      children: [
        {
          name: "Engineering Manager",
          children: [{ name: "Software Engineer" }, { name: "QA Engineer" }],
        },
        { name: "DevOps Manager", children: [{ name: "DevOps Engineer" }] },
      ],
    },
    {
      name: "CFO",
      children: [
        { name: "Accounting Manager", children: [{ name: "Accountant" }] },
        { name: "Financial Analyst" },
      ],
    },
    {
      name: "COO",
      children: [
        { name: "Operations Manager" },
        {
          name: "Customer Support Lead",
          children: [{ name: "Support Specialist" }],
        },
      ],
    },
  ],
};

function OrgNode({ node }) {
  return (
    <div className="flex flex-col items-center relative">
      {/* Node box */}
      <div className="bg-blue-600 text-white px-4 py-2 rounded shadow relative z-10">
        {node.name}
      </div>

      {/* Vertical line to children */}
      {node.children && (
        <>
          <div className="h-6 border-l-2 border-blue-600"></div> {/* vertical line */}
          <div className="flex space-x-8 relative">
            {/* Horizontal line connecting children, centered above children */}
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="w-full border-t-2 border-blue-600"></div>
            </div>
            {/* Child nodes */}
            {node.children.map((child, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Vertical line down to each child */}
                <div className="h-6 border-l-2 border-blue-600 mb-2"></div>
                <OrgNode node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SiteOrganization() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center border-b border-gray-400 pb-4 mb-8">
        <h1 className="text-xl font-bold leading-tight">Site Organization</h1>
      </div>

      {/* Table Section */}
      <section>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="flex justify-center">
            <OrgNode node={organization} />
          </div>
        </div>
      </section>
    </div>
  );
}
