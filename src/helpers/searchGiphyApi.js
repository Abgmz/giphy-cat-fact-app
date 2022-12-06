const GIPHY_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const searchGiphyApi = async (giphyText = "batman") => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${giphyText}&limit=1`;
  const response = await fetch(URL);
  const {
    data: [giphyData],
  } = await response.json();
  const {
    images: {
      original: { url: giphyImage },
    },
  } = giphyData;
  return giphyImage;
};
