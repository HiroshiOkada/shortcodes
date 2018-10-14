// poor man's autoreload
window.addEventListener('load', () =>
  (async () => {
    const INTERVAL = 800
    const DURATION = 10 * 60 * 1000
    const FETCH_OPTION = { credentials: 'include' }

    const response = await fetch(location.href, FETCH_OPTION)
    if (!response.ok) {
      return
    }
    const orgText = await response.text()
    const t0 = Date.now()
    while (Date.now() - t0 < DURATION) {
      await new Promise(resolve => setTimeout(resolve, INTERVAL))
      const response = await fetch(location.href, FETCH_OPTION)
      if (response.ok) {
        const text = await response.text()
        if (orgText !== text) {
          location.reload(true)
          return
        }
      }
    }
  })()
)
