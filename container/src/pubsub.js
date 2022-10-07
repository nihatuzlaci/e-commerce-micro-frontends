// https://github.com/prof3ssorSt3v3/pubsub-demo/blob/master/pubsub.js

export const pubsub = {
  events: {},
  subscribe: function(evName, fn) {
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function(evName, fn) {
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter((f) => f !== fn);
    }
  },
  publish: function(evName, data) {
    if (this.events[evName]) {
      this.events[evName].forEach((f) => {
        f(data);
      });
    }
  },
};
