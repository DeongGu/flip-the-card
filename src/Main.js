import Card from "./Card.js";
import { setQuotes } from "./Storage.js";
export default class Main {
  constructor($target) {
    this.$target = $target;
  }

  async render() {
    const main = document.createElement("main");
    main.setAttribute("class", "main");

    //카드 개수에 따른 render
    const data = await setQuotes();

    for (let i = 0; i < data.length; i++) {
      const card = new Card(main);
      card.render();
    }

    this.$target.appendChild(main);
  }
}
