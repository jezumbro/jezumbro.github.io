export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export const sendToAnalytics = (metric) => {
  const body = JSON.stringify(metric)
  fetch('https://api.zumbrohomestead.com/page-analytics', {
    method: 'POST',
    body,
    keepalive: true,
  }).then((r) => r)
}
