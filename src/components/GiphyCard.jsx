export const GiphyCard = ({ giphyImage }) => {
  return (
    <div className="giphy">
      <div>
        <img
          className="giphy__image"
          src={giphyImage.giphyImageUrl}
          alt="image"
        />
        <div className="giphy__image-shadow"></div>
      </div>

      <p className="giphy__text">{giphyImage.catFactSearchText}</p>
    </div>
  );
};
