import Navigo from "navigo";
import { Error } from "../Error";

const routerNav = new Navigo("/", { linksSelector: "a" });
const root = document.querySelector("#root");
window.navigate = (path) => {
  routerNav.navigate(path);
};

const render = (content) => {
  root.innerHTML = content;
};

export const router = (pathArr, mainLayout = null) => {
  let html = `{body}`;
  if (mainLayout) {
    html = mainLayout();
  }

  if (Array.isArray(pathArr)) {
    pathArr.forEach((item) => {
      routerNav.on(item.path, (param) =>
        render(html.replace(/\{body\}/g, item.component(param)))
      );
    });
  }
  routerNav.notFound(() => render(Error()));
  routerNav.resolve();
};
