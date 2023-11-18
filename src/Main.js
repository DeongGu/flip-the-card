import Card from "./Card.js";
import { setQuotes } from "./Storage.js";
export default class Main {
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

  async render() {
    const main = this.createElement("main", "main");

    //카드 개수에 따른 render
    const data = await setQuotes();

    for (let i = 0; i < data.length; i++) {
      const card = new Card(main, i, data[i]);
      card.render();
    }

    this.$target.appendChild(main);
  }
}
