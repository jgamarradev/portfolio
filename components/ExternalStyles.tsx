'use client'

import { useEffect } from 'react'

export default function ExternalStyles() {
  useEffect(() => {
    // Bootstrap Icons - Required for navigation burger menu and contact icons
    if (!document.getElementById('bootstrap-icons-stylesheet')) {
      const bootstrapIconsLink = document.createElement('link')
      bootstrapIconsLink.rel = 'stylesheet'
      bootstrapIconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
      bootstrapIconsLink.id = 'bootstrap-icons-stylesheet'
      bootstrapIconsLink.crossOrigin = 'anonymous'
      document.head.appendChild(bootstrapIconsLink)
    }
    
    // Font Awesome
    if (!document.getElementById('font-awesome-stylesheet')) {
      const fontAwesomeLink = document.createElement('link')
      fontAwesomeLink.rel = 'stylesheet'
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
      fontAwesomeLink.id = 'font-awesome-stylesheet'
      fontAwesomeLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontAwesomeLink)
    }
  }, [])

  return null
}
