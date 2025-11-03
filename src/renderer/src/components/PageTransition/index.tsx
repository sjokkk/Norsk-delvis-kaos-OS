import { AnimatePresence, motion } from 'motion/react'
import type { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps extends PropsWithChildren {
  className?: string
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{
          width: '100%',
          height: '100%'
        }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
