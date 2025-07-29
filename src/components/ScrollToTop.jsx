import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useNotification } from '../contexts/NotificationContext'
import { useMobile } from '../contexts/MobileContext'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { showSuccess } = useNotification()
  const { isMobile } = useMobile()

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > (isMobile ? 200 : 300))
    }

    const throttledToggleVisibility = throttle(toggleVisibility, 100)
    window.addEventListener('scroll', throttledToggleVisibility)
    return () => window.removeEventListener('scroll', throttledToggleVisibility)
  }, [isMobile])

  const throttle = (func, delay) => {
    let timeoutId
    let lastExecTime = 0
    return function (...args) {
      const currentTime = Date.now()
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func.apply(this, args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    showSuccess('Navigation', 'Scrolled to top')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed ${isMobile ? 'bottom-20 right-4' : 'bottom-6 right-6'} z-50 flex items-center justify-center ${isMobile ? 'w-12 h-12' : 'w-14 h-14'} bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-yellow-300/20`}
          aria-label="Scroll to top"
          style={{
            background: `conic-gradient(from 0deg, #fbbf24 ${scrollProgress}%, rgba(251, 191, 36, 0.2) ${scrollProgress}%)`
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300" />
          <ChevronUpIcon className={`relative z-10 ${isMobile ? 'w-5 h-5' : 'w-6 h-6'} drop-shadow-sm`} />
          
          {/* Progress ring */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90" 
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeDasharray={`${scrollProgress * 2.827} 282.7`}
              className="transition-all duration-300 ease-out"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop