import { vNode } from "./createElement";

function createDomElement(vNode: vNode): HTMLElement | Text {
  if (typeof vNode === "object") {
    const el = document.createElement(vNode.type);
    Object.entries(vNode.attributes).forEach(([key, value]) => {
      (el as any)[key] = value;
    });
    return el;
  } else if (typeof vNode === "string") {
    const el = document.createTextNode(vNode);
    return el;
  }
  return null;
}

export { createDomElement };
