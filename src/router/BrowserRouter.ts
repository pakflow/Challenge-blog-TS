class BrowserRouter {
  url: string;
  subscribers: Array<() => void> = [];

  constructor(initialUrl: string) {
    this.url = initialUrl;
  }

  locateTo(url: string) {
    this.url = url;
    this.notifySubscribers();
  }

  getLocate() {
    return this.url;
  }

  match(urlPattern: RegExp) {
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
