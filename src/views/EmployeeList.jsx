import React, { useState } from "react";
import logo from '../image/logo.png';

const employees = [
  {
    name: "Adélaïde BAKO",
    title: "Responsable Marketing Digital",
    department: "Marketing",
    email: "adelaide.bako@techco.dkr",
  },
  {
    name: "Amadou DIARRA",
    title: "Développeur Frontend",
    department: "Développement Web",
    email: "amadou.diarra@techco.dkr",
  },
  {
    name: "Armel ZINSOU",
    title: "Consultant SEO/SEA",
    department: "Marketing",
    email: "armel.zinsou@techco.dkr",
  },
  {
    name: "Carine HOUNGBO",
    title: "Designer UI/UX",
    department: "Design",
    email: "carine.houngbo@techco.dkr",
  },
  {
    name: "Claudine YESSOU",
    title: "Chargée de Support Technique",
    department: "Support",
    email: "claudine.yessou@techco.dkr",
  },
  {
    name: "David AGOSSOU",
    title: "Ingénieur DevOps",
    department: "Infrastructure",
    email: "david.agossou@techco.dkr",
  },
  {
    name: "Emmanuelle DJOSSOU",
    title: "Chef de Projet Agile",
    department: "Gestion de Projet",
    email: "emmanuelle.djossou@techco.dkr",
  },
  {
    name: "Fabrice HOUESSOU",
    title: "Développeur Backend",
    department: "Développement Web",
    email: "fabrice.houessou@techco.dkr",
  },
  {
    name: "Fatoumata TOURE",
    title: "Analyste de Données",
    department: "Data Science",
    email: "fatoumata.toure@techco.dkr",
  },
  {
    name: "Gérard KOUTON",
    title: "Administrateur Systèmes et Réseaux",
    department: "Infrastructure",
    email: "gerard.kouton@techco.dkr",
  },
  {
    name: "Henri NOUKPO",
    title: "Ingénieur en Intelligence Artificielle",
    department: "Data Science",
    email: "henri.noukpo@techco.dkr",
  },
  {
    name: "Isabelle TOMETY",
    title: "Rédactrice Web/Content Manager",
    department: "Communication",
    email: "isabelle.tomety@techco.dkr",
  },
  {
    name: "Jean-Baptiste GBAGUIDI",
    title: "Consultant en Transformation Digitale",
    department: "Stratégie",
    email: "jean-baptiste.gbaguidi@techco.dkr",
  },
  {
    name: "Laura AHO",
    title: "Responsable des Partenariats",
    department: "Partenariats",
    email: "laura.aho@techco.dkr",
  },
  {
    name: "Marc DEGBE",
    title: "Testeur QA (Assurance Qualité)",
    department: "Qualité",
    email: "marc.degbe@techco.dkr",
  },
];

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-blue-50 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <img src={logo} alt="TechCo Logo" className="w-32" />
        </div>
      </header>

      {/* Title */}
      <div className="text-center mt-8">
        <h1 className="text-2xl font-semibold text-blue-900">
          Liste des employés de TechCo
        </h1>
      </div>

      {/* Search Bar */}
      <div className="mt-6 w-full max-w-md px-4">
        <input
          type="text"
          placeholder="Rechercher un collègue..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee List */}
      <div className="mt-8 w-full max-w-3xl px-4">
        {filteredEmployees.map((employee, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4"
          >
            {/* Avatar */}
            <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A8 8 0 0116.875 21h.126a8.001 8.001 0 01-8.126-8.195M12 14c-3.314 0-6 1.657-6 4v1h12v-1c0-2.343-2.686-4-6-4zm0-4a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </div>

            {/* Employee Info */}
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-blue-900">
                {employee.name}
              </h2>
              <p className="text-sm text-blue-600">{employee.title}</p>
              <p className="text-sm text-gray-600">{employee.department}</p>
              <p className="text-sm text-gray-500">{employee.email}</p>
            </div>
          </div>
        ))}

        {/* No Results */}
        {filteredEmployees.length === 0 && (
          <p className="text-center text-blue-700 mt-4">
            Aucun employé trouvé.
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
