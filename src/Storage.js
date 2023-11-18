export const setQuotes = async () => {
  const res = await fetch("./data/data.json");
  const data = await res.json();
  const newData = Array.from({ length: data.length });

  // 데이터 무작위 배열
  newData.forEach((el, idx) => {
    const randomNumber = Math.floor(Math.random() * data.length);

    if (el === undefined) {
      newData[idx] = data[randomNumber];
    }
  });

  return newData;
};
