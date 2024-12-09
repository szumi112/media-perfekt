import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Media Perfekt Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-400">{t("footer.about")}</p>
        </div>

        <div className=" mt-8 pt-6 text-sm">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              © 2024 Media Perfekt. {t("footer.rightsReserved")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
