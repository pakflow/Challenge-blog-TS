import { createElement } from "../../libs/renderer/utils/createElement";

function Header() {
  return createElement("header", { className: "header_post-list" }, [
    "JSON Placeholder",
  ]);
}

export { Header };
