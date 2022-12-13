import { createElement, vNodeTagElement } from "./utils/createElement";

import { createDomElement } from "./utils/createDomElement";

class Renderer {
  render(vDom: vNodeTagElement, realDomRoot: HTMLElement) {
    // 1. create new vDomRoot element
    // 2. call sync
    const vDomRoot = createElement(
      realDomRoot.tagName,
      { id: realDomRoot.id },
      [vDom]
    );
    this.sync(vDomRoot, realDomRoot);
  }

  sync(vDom: vNodeTagElement, realDom: HTMLElement) {
    while (realDom.attributes.length > 0)
      realDom.removeAttribute(realDom.attributes[0].name);

    for (const [key, value] of Object.entries(vDom.attributes)) {
      (realDom as any)[key] = value;
    }

    const nodesForDelete = [];

    for (
      let i = 0;
      i < Math.max(vDom.children.length, realDom.childNodes.length);
      i++
    ) {
      const vNode = vDom.children[i];
      const realNode = realDom.childNodes[i];
      // Append
      if (vNode !== undefined && realNode === undefined) {
        const newDomEl = createDomElement(vNode);
        realDom.append(newDomEl);
        if (typeof vNode === "object" && newDomEl instanceof HTMLElement) {
          this.sync(vNode, newDomEl);
        }
      }

      // Update
      if (
        (vNode !== undefined &&
          realNode !== undefined &&
          typeof vNode === "object" &&
          realNode instanceof HTMLElement &&
          vNode.type === realNode.tagName.toLowerCase()) ||
        (typeof vNode === "string" && realNode instanceof Text)
      ) {
        if (typeof vNode === "object" && realNode instanceof HTMLElement) {
          this.sync(vNode, realNode);
        } else if (typeof vNode === "string" && realNode instanceof Text) {
          realNode.textContent = vNode;
        }
      }

      // Replace
      if (
        vNode !== undefined &&
        realNode !== undefined &&
        ((typeof vNode === "object" &&
          realNode instanceof HTMLElement &&
          vNode.type.toLowerCase() !== realNode.tagName.toLowerCase()) ||
          (typeof vNode === "string" && realNode instanceof HTMLElement) ||
          (typeof vNode === "object" && realNode instanceof Text))
      ) {
        if (typeof vNode === "object" && realNode instanceof HTMLElement) {
          const newDomEl = createDomElement(vNode) as HTMLElement;
          this.sync(vNode, newDomEl);
          realDom.replaceChild(newDomEl, realNode);
        } else if (
          typeof vNode === "string" &&
          realNode instanceof HTMLElement
        ) {
          const newDomEl = createDomElement(vNode) as Text;
          realDom.replaceChild(newDomEl, realNode);
        } else if (typeof vNode === "object" && realNode instanceof Text) {
          const newDomEl = createDomElement(vNode) as HTMLElement;
          this.sync(vNode, newDomEl);
          realNode.remove();
          realDom.append(newDomEl);
        }
      }

      // Remove
      if (vNode === undefined && realNode !== undefined) {
        nodesForDelete.push(realNode);
      }
    }

    nodesForDelete.forEach((node) => node.remove());
  }
}

export { Renderer };
