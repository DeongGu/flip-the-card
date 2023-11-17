import Header from "./Header.js";
import ShuffleBtn from "./ShuffleBtn.js";
import Main from "./Main.js";

export default class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  async render() {
    const header = new Header(this.$target);
    header.render();

    const shuffleBtn = new ShuffleBtn(this.$target);
    shuffleBtn.render();

    const main = new Main(this.$target);
    main.render();
  }
}
