import Header from "./Header.js";
import Main from "./Main.js";
import { setQuotes } from "./Storage.js";

export default class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  async render() {
    const header = new Header(this.$target);
    header.render();

    const main = new Main(this.$target);
    main.render();

    await setQuotes();
  }
}
