export default class ShuffleBtn {
  constructor($target) {
    this.$target = $target;
  }

  render() {
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn_shuffle");
    this.$target.appendChild(btn);

    const shuffleImg = document.createElement("img");
    shuffleImg.src = "./public/shuffle.png";
    shuffleImg.setAttribute("class", "image");

    btn.appendChild(shuffleImg);

    const clickEvent = btn.addEventListener("click", () => {
      const main = document.querySelector(".main");
      const cards = document.querySelectorAll(".card");

      const mainRect = main.getBoundingClientRect();
      const centerX = mainRect.width / 2;
      const centerY = mainRect.height / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const offsetX = 200 - (cardRect.left + cardRect.width / 2);
        const offsetY = 300 - (cardRect.top + cardRect.height / 2);

        card.style = `transform: translate(${offsetX}px, ${offsetY}px);`;
      });
    });
  }
}
