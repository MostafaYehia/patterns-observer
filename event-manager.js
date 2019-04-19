const eventManager = (() => {
  const subscribers = {};

  // console.log("Another module has been loaded successfully");

  const subscribe = (type, fn) => {
    if (!subscribers[type]) {
      subscribers[type] = [];
    }

    // Add with no dublicating
    if (subscribers[type].indexOf(fn) == -1)
      subscribers[type].push(fn);

    return {
      unsubscribe: () => {
        const idx = subscribers[type].indexOf(fn);
        subscribers[type].splice(idx, 1);
      }
    }
  }

  const publish = (type, evtObject) => {

    if (!subscribers[type])
      return undefined;

    if (!evtObject.type)
      evtObject.type = type;

    const listeners = subscribers[type];
    listeners.forEach((listener) => {
      if (typeof listener === 'function')
        listener(evtObject);
      else
        console.log("second arg mus be a function")
    })
  }


  return {
    subscribe: subscribe,
    publish: publish
  }
})()


export default eventManager