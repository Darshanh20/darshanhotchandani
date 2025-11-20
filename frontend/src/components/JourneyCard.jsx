import { motion } from 'framer-motion'

/**
 * JourneyCard Component
 * Reusable card for each journey milestone
 * Features: glassmorphism effect, hover animations, gradient borders
 */
const JourneyCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative group h-full"
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <div className="absolute inset-0 bg-gray-900 rounded-2xl" />
      </div>

      {/* Card content */}
      <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 group-hover:border-gray-700 rounded-2xl p-6 md:p-8 transition-all duration-300">
        
        {/* Top section: Icon and badge */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}
          >
            <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center overflow-hidden">
              <img
                src={`/src/assets/${item.icon}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs md:text-sm font-semibold`}
          >
            {item.period.split(',')[0]}
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
        >
          {item.title}
        </motion.h3>

        {/* Period */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`text-sm md:text-base font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}
        >
          {item.period}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-sm md:text-base leading-relaxed"
        >
          {item.description}
        </motion.p>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-6 h-1 w-12 bg-gradient-to-r ${item.color} rounded-full origin-left`}
        />
      </div>
    </motion.div>
  )
}

export default JourneyCard
