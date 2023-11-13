export const setQuotes = async () => {
  const res = await fetch("./data/data.json");
  const data = await res.json();

  if (!localStorage.getItem("quotes")) {
    localStorage.setItem("quotes", JSON.stringify(data));
  }

  return data;
};
