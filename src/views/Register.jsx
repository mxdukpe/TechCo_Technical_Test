import React from "react";
import logo from '../image/logo.png';
import girl from '../image/girl.png'

import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const handleConnection = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="flex flex-col md:flex-row bg-blue-50 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Form Section */}
        <div className="p-8 md:w-1/2">
          <img
            src={logo}
            alt="TechCo Logo"
            className="w-20 mb-6"
          />
          <h1 className="text-2xl font-semibold text-blue-800 mb-4">
            Créez votre compte
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-700"
              >
                Nom
              </label>
              <input
                type="name"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="work"
                className="block text-sm font-medium text-blue-700"
              >
                Profession
              </label>
              <input
                type="name"
                id="work"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Votre profession"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-700"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Votre mot de passe"
              />
            </div>
            <button
            onClick={(event) => handleConnection(event)}
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white uppercase font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              Créez votre compte
            </button>
          </form>
          <p className="text-center text-sm text-blue-700 mt-4">
            Vous avez déjà un compte ?{" "}
            <a href="/" className="text-blue-500 underline">
              Connectez-vous!
            </a>
          </p>
          <p className="text-center text-sm text-blue-700 mt-2">
            <a href="/" className="text-blue-500 underline">
              Mot de passe oublié ?
            </a>
          </p>
        </div>

        {/* Illustration Section */}
        <div className="hidden md:flex items-center justify-center md:w-1/2 bg-blue-100 rounded-r-lg">
          <img
            src={girl}
            alt="Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
