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
      </div>
    </div>
  );
};

export default Contact;
