;(() => {
  if (!navigator.serviceWorker) {
    return
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(sw => {
        console.log(`ServiceWorker scope: ${sw.scope}`)
      })
      .catch(err => {
        console.error(`ServiceWorker failed: ${err}`)
      })
  })
})()
