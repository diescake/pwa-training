;(() => {
  if (!navigator.serviceWorker) {
    return
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/pwa-training/js/sw.js')
      .then(sw => {
        console.log(`ServiceWorker scope: ${sw.scope}`)
      })
      .catch(err => {
        console.error(`ServiceWorker failed: ${err}`)
      })
  })
})()
