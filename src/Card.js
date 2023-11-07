export default class Card {
  constructor($target) {
    this.$target = $target;
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
    back.innerText = "뒷면";
    card.appendChild(back);

    this.$target.appendChild(cardWrapper);
  }
}
