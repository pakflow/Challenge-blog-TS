import { vNodeTagElement } from "@utils/createElement";
import { BrowserRouter } from "../BrowserRouter";

interface Route {
  path: RegExp;
  element: (params: string[]) => vNodeTagElement;
}

interface RouterProps {
  router: BrowserRouter;
  routes: Route[];
}

function Router({ router, routes }: RouterProps) {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const params = router.match(route.path);
    if (params) {
      return route.element(params);
    }
  }
}

export { Router };
