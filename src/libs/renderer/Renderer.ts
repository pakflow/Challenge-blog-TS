class Renderer {
  render(target: HTMLElement, element: HTMLElement) {
    target.innerHTML = "";
    target.appendChild(element);
  }
}

export { Renderer };
