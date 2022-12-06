export const searchCatFactApi = async () => {
  const URL = "https://catfact.ninja/fact";
  const response = await fetch(URL);
  const { fact } = await response.json();
  const splittedFact = fact.split(" ", 3).join(" ");
  return { splittedFact, fact };
};
