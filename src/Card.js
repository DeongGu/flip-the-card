export default class Card {
  constructor($target, index, data) {
    this.$target = $target;
    this.index = index;
    this.data = data;
  }

  render() {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "cardWrapper");

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cardWrapper.appendChild(card);

    const front = document.createElement("div");
    front.setAttribute("class", "card_front");
    card.appendChild(front);

    const img = document.createElement("img");
    img.setAttribute("class", "card_image");
    img.src = "./public/icon.png";
    front.appendChild(img);

    const back = document.createElement("div");
    back.setAttribute("class", "card_back");

    const backTitle = document.createElement("div");
    backTitle.setAttribute("class", "back_title");
    backTitle.innerHTML = this.data.writer;
    back.appendChild(backTitle);

    const backContents = document.createElement("div");
    backContents.setAttribute("class", "back_contents");
    backContents.innerHTML = this.data.contents;
    back.appendChild(backContents);

    card.appendChild(back);

    this.$target.appendChild(cardWrapper);

    // 이벤트
    const clickEvent = cardWrapper.addEventListener("click", () => {
      let cardClassList = document.querySelectorAll(".card");

      if (cardClassList[this.index].classList.contains("flipped")) {
        cardClassList[this.index].classList.remove("flipped");
      } else {
        cardClassList[this.index].classList.add("flipped");
      }
    });
  }
}
