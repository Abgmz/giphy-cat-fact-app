import errorImg from "../assets/error.svg";

export const Error = () => {
  return (
    <article className="error">
      <img className="error__img" src={errorImg} alt="not data" />
      <p className="error__text">Not data found!! Please reload the website</p>
    </article>
  );
};
