define(function () {


  // console.log("Another module has been loaded successfully");

  const subscribe = (type, fn) => {
    // console.log("Subscribed")
  }

  const unsubscribe = () => {
    // console.log("Unsubscribed")
  }

  const publish = (type, evtObject) => {
    // console.log("Publish, ", evtObject)
  }


  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    publish: publish
  }

})