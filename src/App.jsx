import { useState, useEffect } from "react";
import { GiphyCard } from "./components/GiphyCard";
import { Loader } from "./components/Loader";
import { searchCatFactApi } from "./helpers/searchCatFactApi";
import { searchGiphyApi } from "./helpers/searchGiphyApi";
import { Error } from "./components/Error";
import sunIcon from "../src/assets/sun.svg";
import moonIcon from "../src/assets/moon.svg";

const initialState = {
  giphyImageUrl: "",
  catFactSearchText: "",
  splitted: "",
  updateGiphy: false,
  dataError: false,
  theme: "light",
};

function App() {
  const [giphyImage, setGiphyImage] = useState(initialState);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getCatFactText = async () => {
      try {
        setLoader(true);
        const { splittedFact, fact } = await searchCatFactApi();
        setGiphyImage({
          ...giphyImage,
          catFactSearchText: fact,
          splitted: splittedFact,
        });
        setLoader(false);
      } catch (err) {
        if (err) {
          setLoader(false);
          setGiphyImage({ ...giphyImage, dataError: !giphyImage.dataError });
        }
      }
    };

    getCatFactText();
  }, [giphyImage.updateGiphy]);

  useEffect(() => {
    if (giphyImage.splitted) {
      const getGiphyImage = async () => {
        setLoader(true);
        const newGiphyImageUrl = await searchGiphyApi(giphyImage.splitted);
        setGiphyImage({ ...giphyImage, giphyImageUrl: newGiphyImageUrl });
        setLoader(false);
      };
      getGiphyImage();
    }
  }, [giphyImage.catFactSearchText]);

  const handleUpdate = () => {
    setGiphyImage({ ...giphyImage, updateGiphy: !giphyImage.updateGiphy });
  };

  const handleToggleTheme = () => {
    let theme = giphyImage.theme === "light" ? "dark" : "light";
    setGiphyImage({ ...giphyImage, theme });
  };

  return (
    <main className={giphyImage.theme === "dark" ? "darkmode" : ""}>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleToggleTheme} className="button__theme">
        {giphyImage.theme === "light" ? (
          <img
            className="button__icon-theme"
            src={moonIcon}
            alt="toogle theme"
          />
        ) : (
          <img
            className="button__icon-theme"
            src={sunIcon}
            alt="toogle theme"
          />
        )}
      </button>
      {loader ? (
        <Loader />
      ) : giphyImage.dataError ? (
        <Error />
      ) : (
        <GiphyCard giphyImage={giphyImage} />
      )}
    </main>
  );
}

export default App;
