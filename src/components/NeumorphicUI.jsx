import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faBatteryFull,
  faTint,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import phoneAndroid from "../assets/phone-android.jpg";
import { useState } from "react";
import ContactModal from "./contactModal";

const NeumorphicUI = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto">
        <header className="bg-black flex flex-wrap justify-between items-center px-4 sm:px-10 py-4 fixed w-full max-w-[1440px] text-white z-10 shadow-md z-20">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={logo} alt="Media Perfekt Logo" className="h-10 mr-4" />
          </div>
          <div className="flex flex-wrap justify-between gap-4 sm:gap-8 items-center">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blueAccent text-sm mr-3"
              />
              <a
                href="mailto:biuro@mediaperfekt.pl"
                className="text-sm sm:text-base text-white"
              >
                biuro@mediaperfekt.pl
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blueAccent text-sm mr-3"
              />
              <a
                href="tel:+48660321777"
                className="text-sm sm:text-base text-white"
              >
                +48 660 321 777
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-blueAccent text-sm mr-3"
              />
              <span className="text-sm sm:text-base">
                {t("header.days-hours")}
              </span>
            </div>
          </div>
        </header>

        <section
          className="relative flex flex-col sm:flex-row items-center justify-center min-h-screen pt-20"
          id="hero"
        >
          <div className="text-center sm:text-left max-w-lg mb-8 sm:mb-0 z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {t("hero.heading")}
            </h1>
            <p className="text-sm sm:text-lg text-gray-400 mb-6">
              {t("hero.description")}
            </p>
            <button
              onClick={handleOpenModal}
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-red-600 text-white hover:scale-105 transition-transform"
            >
              {t("hero.button")}
            </button>
          </div>

          <div className="w-full sm:w-auto flex justify-end">
            <img
              src={phoneAndroid}
              alt="Phone Mockup"
              className="absolute bottom-0 right-0 h-[80vh] max-w-none object-contain"
            />
          </div>
        </section>
      </div>
      <section id="services" className="bg-white py-10 sm:py-20 px-4 sm:px-10">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-10">
            {t("services.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-900 rounded-xl">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-3xl sm:text-4xl text-blueAccent mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold">
                {t("services.screen")}
              </h3>
            </div>
            <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-900 rounded-xl">
              <FontAwesomeIcon
                icon={faBatteryFull}
                className="text-3xl sm:text-4xl text-blueAccent mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold">
                {t("services.battery")}
              </h3>
            </div>
            <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-900 rounded-xl">
              <FontAwesomeIcon
                icon={faTint}
                className="text-3xl sm:text-4xl text-blueAccent mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold">
                {t("services.water")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NeumorphicUI;
