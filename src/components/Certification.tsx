
import React, { useState } from "react";
// 1. Define the `Certificate` type
type Certificate = {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  imageUrl: string;
};
// 2. Define the `certificates` array
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full-stack Developer Certification",
    organization: "Teach2Give",
    date: "August 2024",
    description:
      "Certified Full Stack Developer with expertise in both front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React for front-end development. Skilled in server-side programming with Node.js, Hono.js, and databases like PostgreSQL and SQL.",
    imageUrl:
      "https://res.cloudinary.com/dbczn8b8l/image/upload/v1725476120/vyahyaqu3sas2igzqgg1.jpg",
  },
  {
    id: 2,
    title: "Postman Student Expert Certification",
    organization: "Postman",
    date: "August 2024",
    description:
      "Certified in Postman API testing and development, with knowledge of creating automated tests, collections, and workspaces. Skilled in RESTful API integration and troubleshooting.",
    imageUrl:
      "https://res.cloudinary.com/dbczn8b8l/image/upload/v1724354046/a57ug3r8zzgklzdzure8.png",
  },
  {
    id: 3,
    title: "Huawei Networks Certification",
    organization: "Huawei",
    date: "September 2024",
    description:
      "Certified in Computer Networks with a focus on Huawei technologies. Gained comprehensive knowledge in network design, implementation, and management.",
    imageUrl:
      "https://res.cloudinary.com/dbczn8b8l/image/upload/v1726849155/ubuk7aj9jjxxhaxyr8it.jpg",
  },
  {
    id: 4,
    title: "Search Engine Optimization",
    organization: "Hubspot",
    date: "November 2024",
    description:
      "Certified in Search Engine Optimization (SEO) with a comprehensive understanding of on-page and off-page SEO techniques.",
    imageUrl:
      "https://res.cloudinary.com/dbczn8b8l/image/upload/v1732036348/pr4lqiqogsaedtoxxipo.png",
  },
];

const CertificationComponent: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };
// 4. Implement the `CertificationComponent` functional component
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-white dark:text-yellow-500">
        {'My Certifications { }'}
      </h2>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(certificate)}
          >
            <img
              src={certificate.imageUrl}
              alt={certificate.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {certificate.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {certificate.organization}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {certificate.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-11/12 max-w-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedCertificate.imageUrl}
              alt={selectedCertificate.title}
              className="w-full h-64 object-contain rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {selectedCertificate.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Organization:</span>{" "}
              {selectedCertificate.organization}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Date:</span>{" "}
              {selectedCertificate.date}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {selectedCertificate.description}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationComponent;
