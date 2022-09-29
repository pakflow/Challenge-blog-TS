class Store<T extends Record<any, any>> {
  private state: T;
  private subscribers: Array<() => void> = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  setState(newState: Partial<T>): void {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  }

  getState(): T {
    return this.state;
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

export { Store };
