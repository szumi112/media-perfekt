import { useTranslation } from "react-i18next";

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {t("contactModal.title")}
        </h2>
        <div className="mb-6 text-gray-700">
          <p>
            <strong>{t("contactModal.email")}: </strong>
            <a href="mailto:biuro@mediaperfekt.pl" className="ml-1">
              biuro@mediaperfekt.pl
            </a>
          </p>
          <p>
            <strong>{t("contactModal.phone")}: </strong>
            <a href="tel:+48660321777" className="ml-1">
              +48 660 321 777
            </a>
          </p>
          <p>
            <strong className="mr-1">{t("contactModal.hours")}: </strong>
            {t("header.days-hours")}
          </p>
          <p>
            <strong className="mr-1">{t("contactModal.address")}: </strong>
            <a
              href="https://www.google.com/maps/place/Media+Perfekt/@52.210335,20.8046742,17z/data=!3m1!4b1!4m6!3m5!1s0x47194b5d9fb447bd:0xd7f04d6db610fdf0!8m2!3d52.210335!4d20.8046742!16s%2Fg%2F11rp41_1gg?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
              className="ml-1"
            >
              Poznańska 258, 05-850 Ożarów Mazowiecki
            </a>
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {t("contactModal.name")}
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder={t("contactModal.namePlaceholder")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {t("contactModal.email")}
            </label>
            <input
              type="email"
              className="w-full border rounded-lg p-2"
              placeholder={t("contactModal.emailPlaceholder")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {t("contactModal.message")}
            </label>
            <textarea
              className="w-full border rounded-lg p-2"
              placeholder={t("contactModal.messagePlaceholder")}
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full md:w-auto"
          >
            {t("contactModal.sendButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
