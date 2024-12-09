import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faDesktop,
  faGamepad,
  faTv,
  faCamera,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const WhatWeDo = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: faMobileAlt,
      title: t("services.smartphone"),
      description: t("services.smartphoneDescription"),
      link: t("services.readMore"),
    },
    {
      icon: faDesktop,
      title: t("services.computer"),
      description: t("services.computerDescription"),
      link: t("services.readMore"),
    },
    {
      icon: faGamepad,
      title: t("services.console"),
      description: t("services.consoleDescription"),
      link: t("services.readMore"),
    },
    {
      icon: faTv,
      title: t("services.tv"),
      description: t("services.tvDescription"),
      link: t("services.readMore"),
    },
    {
      icon: faCamera,
      title: t("services.camera"),
      description: t("services.cameraDescription"),
      link: t("services.readMore"),
    },
    {
      icon: faMicrochip,
      title: t("services.other"),
      description: t("services.otherDescription"),
      link: t("services.readMore"),
    },
  ];

  return (
    <div className="bg-white ">
      <div className="max-w-[1440px] mx-auto">
        <section id="services" className="bg-white py-10 sm:py-20 px-6 md:px-0">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-10">
              <span className="border-l-4 border-red-600 pl-4 w-[10px] mx-auto" />
              {t("services.title")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 sm:p-8 bg-gray-900 rounded-lg shadow-md"
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-3xl sm:text-4xl text-blueAccent mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base mb-4 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
