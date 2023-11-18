import { setQuotes } from "./Storage.js";
export default class ShuffleBtn {
  constructor($target) {
    this.$target = $target;
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
    const textElement = document.createTextNode(text);

    $elem.setAttribute("class", css);
    $elem.appendChild(textElement);

    return $elem;
  }

  render() {
    const $btn = this.createElement("button", "btn_shuffle");
    this.$target.appendChild($btn);

    const $shuffleImg = this.createElement("img", "image");
    $shuffleImg.src = "./public/shuffle.png";
    $btn.appendChild($shuffleImg);

    const clickEvent = $btn.addEventListener("click", async () => {
      const btnShuffle = document.querySelector(".btn_shuffle");
      const cards = document.querySelectorAll(".card");

      const btnRect = btnShuffle.getBoundingClientRect();
      const orderX = btnRect.x;
      const orderY = btnRect.y + 2 * btnRect.height;

      const data = await setQuotes();

      cards.forEach((card, idx) => {
        const backTitle = document.querySelectorAll(".back_title");
        backTitle[idx].innerHTML = data[idx].writer;

        const backContents = document.querySelectorAll(".back_contents");
        backContents[idx].innerHTML = data[idx].contents;

        const cardRect = card.getBoundingClientRect();
        const offsetX = orderX - cardRect.x;
        const offsetY = orderY - cardRect.y;
        card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      setTimeout(() => {
        cards.forEach((card) => {
          card.style.transform = "";
          card.classList.remove("flipped");
        });
      }, 900);
    });
  }
}
