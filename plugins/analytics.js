
export default ({ app }, inject) => {
  inject('sendEvent', sendEvent)
}

function sendEvent(data) {
  const eventParams = {
    eventCategory: data.eventCategory,
    eventAction: data.eventAction
  }
  if (data.eventLabel) {
    eventParams.eventLabel = data.eventLabel
  }
  this.$ga.event(eventParams)
}
