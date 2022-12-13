class BrowserRouter {
  url: string;
  subscribers: Array<() => void> = [];

  constructor(initialUrl: string) {
    this.url = initialUrl;
    window.addEventListener("popstate", () => {
      this.url = window.location.pathname;
      this.notifySubscribers();
    });
  }

  locateTo(url: string) {
    this.url = url;
    history.pushState(null, "", url);
    this.notifySubscribers();
  }

  getLocate() {
    return this.url;
  }

  match(urlPattern: RegExp): null | string[] {
    const result = this.url.match(urlPattern);
    if (result === null) {
      return null;
    } else {
      return result.slice(1);
    }
  }

  subscribe(cb: () => void): () => void {
    this.subscribers.push(cb);

    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== cb);
    };
  }

  notifySubscribers(): void {
    this.subscribers.forEach((sub) => sub());
  }
}

export { BrowserRouter };
