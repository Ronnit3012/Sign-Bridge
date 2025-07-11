import { useState } from "react";
import LanguageNavbar from "./LanguageNavbar";
import SpeechInput from "./SpeechInput";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CameraView from "./CameraView";

function Container() {
  const [selectedLanguageLeft, setSelectedLanguageLeft] = useState("English");
  const [selectedLanguageRight, setSelectedLanguageRight] = useState("English");
  const [inputText, setInputText] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped((prev) => !prev);
    setSelectedLanguageLeft(selectedLanguageRight);
    setSelectedLanguageRight(selectedLanguageLeft);
  };

  const leftProps = {
    selected: selectedLanguageLeft,
    onClick: setSelectedLanguageLeft,
    dropdownId: "languages",
    side: "left",
    inputText,
    setInputText,
  };
  const rightProps = {
    selected: selectedLanguageRight,
    onClick: setSelectedLanguageRight,
    dropdownId: "languages-output",
    side: "right",
  };

  const isOutputOnLeft = isSwapped;

  return (
    <div className="containerLayout">
      {isSwapped ? (
        <>
          <div className="container">
            <LanguageNavbar {...rightProps} />
            <main>
              {/* Output area: show camera if output is on left */}
              {isOutputOnLeft && <CameraView />}
            </main>
          </div>
          <div className="divison swap-btn-wrapper">
            <button
              className="swap-btn"
              onClick={handleSwap}
              aria-label="Swap left and right containers"
              tabIndex={0}
            >
              <SwapHorizIcon fontSize="large" />
            </button>
          </div>
          <div className="container">
            <LanguageNavbar {...leftProps} />
            <main>
              <SpeechInput
                inputText={inputText}
                setInputText={setInputText}
                placeholder={LanguageNavbar.getPlaceholder(selectedLanguageLeft)}
                lang={LanguageNavbar.getLangCode(selectedLanguageLeft)}
              />
            </main>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <LanguageNavbar {...leftProps} />
            <main>
              <SpeechInput
                inputText={inputText}
                setInputText={setInputText}
                placeholder={LanguageNavbar.getPlaceholder(selectedLanguageLeft)}
                lang={LanguageNavbar.getLangCode(selectedLanguageLeft)}
              />
            </main>
          </div>
          <div className="divison swap-btn-wrapper">
            <button
              className="swap-btn"
              onClick={handleSwap}
              aria-label="Swap left and right containers"
              tabIndex={0}
            >
              <SwapHorizIcon fontSize="large" />
            </button>
          </div>
          <div className="container">
            <LanguageNavbar {...rightProps} />
            <main>{/* Output area */}</main>
          </div>
        </>
      )}
    </div>
  );
}

export default Container;
