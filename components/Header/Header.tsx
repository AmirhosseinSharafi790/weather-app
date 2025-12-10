import { useTranslation } from "react-i18next";

export default function Header() {
    const { t , i18n} = useTranslation("common")
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
    }
    return(
      <div className="flex flex-col-reverse md:flex-row gap-2 mb-8 items-center justify-between">
        <div className="w-full md:w-3/5">
          <input type="text" placeholder={t("SearchCities")} className="text-gray-200 w-full outline-0 placeholder:text-gray-200 caret-gray-200 bg-gray-700 p-3 rounded-lg shadow" />
        </div>
        <div className="flex flex-row gap-2 w-full md:w-2/5">
          <button
            onClick={() => changeLanguage("en")}
            className={`w-1/3 px-6 py-3 rounded-lg ${i18n.language === "en" ? "bg-blue-600 text-gray-200" : "bg-gray-600 text-gray-200"}`}>
            English
          </button>
          <button
            onClick={() => changeLanguage("fa")}
            className={`w-1/3 px-6 py-3 rounded-lg ${i18n.language === "fa" ? "bg-blue-600 text-gray-200" : "bg-gray-600 text-gray-200"}`}>
            فارسی
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className={`w-1/3 px-6 py-3 rounded-lg ${i18n.language === "ar" ? "bg-blue-600 text-gray-200" : "bg-gray-600 text-gray-200"}`}>
            العربية
          </button>
        </div>
      </div>
    )
}