import { t } from "i18next";

const Reviews = () => {
  return (
    <div className="bg-white mt-10 mb-20 px-4 md:px-0">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-10">
          <span className="border-l-4 border-red-600 pl-4 w-[10px] mx-auto" />
          {t("reviews.header")}
        </h2>
        <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25496865"
          width="100%"
          height="660px"
          className="iFrame"
        ></iframe>
      </div>
    </div>
  );
};

export default Reviews;
