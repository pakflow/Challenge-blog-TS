import { vNodeTagElement } from "../../libs/renderer/utils/createElement";
import { BrowserRouter } from "../BrowserRouter";

type Route = {
  path: RegExp;
  element: vNodeTagElement;
};

type RouterProps = {
  router: BrowserRouter;
  routes: Route[];
};

function Router(props: RouterProps) {
  const { router, routes } = props;

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    if (router.match(route.path)) {
      return route.element;
    }
  }
}

export { Router };
