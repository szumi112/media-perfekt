import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white my-10 px-6 md:px-0">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-10">
          <span className="border-l-4 border-red-600 pl-4 w-[10px] mx-auto" />
          {t("contact.header")}
        </h2>
        <div className="my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.819092325318!2d20.802099277757645!3d52.21033497198159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47194b5d9fb447bd%3A0xd7f04d6db610fdf0!2sMedia%20Perfekt!5e0!3m2!1spl!2spl!4v1733743642295!5m2!1spl!2spl"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
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

export default Contact;
