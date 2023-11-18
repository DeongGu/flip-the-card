export default class Header {
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
    const $header = this.createElement("header", "header");

    const $title = this.createElement("h1", "title", "명언 카드 뒤집기");
    $header.appendChild($title);
    this.$target.appendChild($header);
  }
}
