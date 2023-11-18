export default class Card {
  constructor($target, index, data) {
    this.$target = $target;
    this.index = index;
    this.data = data;
  }

  /**
   *
   * @param {DOMElement} element
   * @param {className} css
   * @param {Text} text
   * @returns DOMElement
   */
  createElement(element, css, text = "") {
    const $elem = document.createElement(element);
    const $textElement = document.createTextNode(text);

    $elem.setAttribute("class", css);
    $elem.appendChild($textElement);

    return $elem;
  }

  render() {
    const cardWrapper = this.createElement("div", "card_wrapper");

    const card = this.createElement("div", "card");
    cardWrapper.appendChild(card);

    const front = this.createElement("div", "card_front");
    card.appendChild(front);

    const img = this.createElement("img", "image");
    img.src = "./public/icon.png";
    front.appendChild(img);

    const back = this.createElement("div", "card_back");

    const backTitle = this.createElement("div", "back_title");
    backTitle.innerHTML = this.data.writer;
    back.appendChild(backTitle);

    const backContents = this.createElement("div", "back_contents");
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
