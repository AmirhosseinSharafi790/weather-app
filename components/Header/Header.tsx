"use client";

import { Search } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  onSearch: (city: string) => void
}

export default function Header({ onSearch }: HeaderProps) {
    const { t , i18n} = useTranslation("common")
    const [searchValue, setSearchValue] = useState("")

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
    }

    const handleSearchChange = () => {
      onSearch(searchValue)
    }

    return(
      <div className="flex flex-col-reverse md:flex-row gap-2 mb-8 items-center justify-between">
        <div className="w-full md:w-3/5 flex items-center justify-between gap-x-3 bg-gray-400 p-1 rounded-lg">
          <input
            type="text"
            placeholder={t("SearchCities")}
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-gray-700 w-full outline-0 placeholder:text-gray-100 caret-gray-700 bg-gray-400 p-3 rounded-lg"
          />
          <button onClick={handleSearchChange}
          className="cursor-pointer flex items-center justify-center text-gray-200 w-12 bg-gray-700 p-3 rounded-lg">
            <Search />
          </button>
        </div>

        <div className="flex flex-row gap-2 w-full md:w-2/5">
          {["en", "fa", "ar"].map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`w-1/3 px-6 py-4.5 rounded-lg ${ i18n.language === lng ? "bg-blue-600 text-gray-200" : "bg-gray-600 text-gray-200" }`}>
              {lng === "en" ? "English" : lng === "fa" ? "فارسی" : "العربية"}
            </button>
          ))}
        </div>
      </div>
    )
}