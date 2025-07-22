import React from "react";

const LANGUAGES = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Arabic",
  "Japanese",
  "Chinese",
  "Dutch",
  "Italian"
];

const SIGN_LANGUAGES = [
  "ISL", // Indian Sign Language
  "ASL", // American Sign Language
  "BSL"  // British Sign Language
];

const PLACEHOLDERS = {
  English: "Enter your text here...",
  Hindi: "अपना पाठ यहाँ लिखें...",
  Spanish: "Escribe tu texto aquí...",
  French: "Entrez votre texte ici...",
  German: "Geben Sie hier Ihren Text ein...",
  Arabic: "أدخل نصك هنا...",
  Japanese: "ここにテキストを入力してください...",
  Chinese: "在此输入您的文本...",
  Dutch: "Voer hier uw tekst in...",
  Italian: "Inserisci qui il tuo testo..."
};

const INPUT_LANG_CODES = {
  English: "en",
  Hindi: "hi",
  Spanish: "es",
  French: "fr",
  German: "de",
  Arabic: "ar",
  Japanese: "ja",
  Chinese: "zh",
  Dutch: "nl",
  Italian: "it"
};

function LanguageNavbar({ selected, onClick, dropdownId, side }) {
  const visibleCount = 4;
  const languageList = side === "right" ? SIGN_LANGUAGES : LANGUAGES;
  const sortedLanguages = [selected, ...languageList.filter((l) => l !== selected)];
  const visibleLanguages = sortedLanguages.slice(0, visibleCount);
  const overflowLanguages = sortedLanguages.slice(visibleCount);

  const handleDropdownChange = (e) => {
    onClick(e.target.value);
  };

  return (
    <nav className="lang-navbar">
      {visibleLanguages.map((lang) => (
        <button
          key={lang}
          className={`lang-btn${selected === lang ? " selected" : ""}`}
          onClick={() => onClick(lang)}
          type="button"
        >
          {lang}
        </button>
      ))}
      {overflowLanguages.length > 0 && (
        <select
          id={dropdownId}
          className="lang-dropdown"
          onChange={handleDropdownChange}
          value=""
        >
          <option value="" disabled>
            More
          </option>
          {overflowLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {selected === lang ? `✓ ${lang}` : lang}
            </option>
          ))}
        </select>
      )}
    </nav>
  );
}

LanguageNavbar.LANGUAGES = LANGUAGES;
LanguageNavbar.getPlaceholder = (lang) => {
  // Defensive: handle possible whitespace or case issues
  const key = Object.keys(PLACEHOLDERS).find(
    (k) => k.toLowerCase() === (lang || "").toLowerCase()
  );
  return PLACEHOLDERS[key] || PLACEHOLDERS.English;
};
LanguageNavbar.getLangCode = (lang) => {
  const key = Object.keys(INPUT_LANG_CODES).find(
    (k) => k.toLowerCase() === (lang || "").toLowerCase()
  );
  return INPUT_LANG_CODES[key] || "en";
};

export default LanguageNavbar;
