import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white my-10 px-6 md:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg py-2 shadow-md pb-3">
            <h3 className="text-lg text-gray-900 font-bold mb-2">
              {t("contactModal.address")}
            </h3>
            <p className="text-gray-700">
              Poznańska 258, <br /> 05-850 Ożarów Mazowiecki
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-50 pt-2 rounded-lg shadow-md pb-5">
            <h3 className="text-lg text-gray-900 font-bold mb-2">
              {t("contactModal.phone")}
            </h3>
            <p className="text-gray-200">
              <a
                href="tel:+48660321777"
                className="text-gray-700 hover:underline"
              >
                +48 660 321 777
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-50 pt-2 rounded-lg shadow-md pb-5">
            <h3 className="text-lg text-gray-900 font-bold mb-2">E-mail</h3>
            <p className="text-gray-700">
              <a
                href="mailto:biuro@mediaperfekt.pl"
                className="text-gray-700 hover:underline"
              >
                biuro@mediaperfekt.pl
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-50 pt-2 rounded-lg shadow-md pb-5">
            <h3 className="text-lg text-gray-900 font-bold mb-2">
              {t("contactModal.hours")}
            </h3>
            <p className="text-gray-700">
              {" "}
              {t("header.days-hours")} <br />
              {t("header.days-hours-weekend")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
