import { vNodeTagElement } from "../../libs/renderer/utils/createElement";
import { BrowserRouter } from "../BrowserRouter";

type Route = {
  path: RegExp;
  element: (params: string[]) => vNodeTagElement;
};

type RouterProps = {
  router: BrowserRouter;
  routes: Route[];
};

function Router(props: RouterProps) {
  const { router, routes } = props;

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const params = router.match(route.path);
    if (params) {
      return route.element(params);
    }
  }
}

export { Router };
