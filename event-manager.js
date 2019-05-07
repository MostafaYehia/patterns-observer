export default (() => {

  let observers = {};

  function subscribe(type, fn) {
    if (!observers.hasOwnProperty(type)) observers[type] = [];
    observers[type].push(fn);
    return { unsubscribe: this.unsubscribe, type: type, ref: fn }
  }

  function unsubscribe() {
    let idx = observers[this.type].indexOf(this.ref);
    return observers[this.type].splice(idx,1);
  }

  function publish(type, evtObject) {
    observers[type].forEach(observer => {
      observer(evtObject)
    });
  }


  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    publish: publish
  }
})();
