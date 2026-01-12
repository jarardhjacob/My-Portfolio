import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Braces, 
  FileCode, 
  Palette, 
  Sparkles, 
  Server, 
  Zap, 
  Database, 
  Leaf, 
  GitBranch, 
  Wind, 
  Package 
} from 'lucide-react';

const skills = [
  { name: 'React', category: 'Frontend', icon: Code2, color: 'text-cyan-500' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: Braces, color: 'text-yellow-500' },
  { name: 'TypeScript', category: 'Frontend', icon: FileCode, color: 'text-blue-500' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Palette, color: 'text-teal-500' },
  { name: 'Framer Motion', category: 'Frontend', icon: Sparkles, color: 'text-purple-500' },
  { name: 'Node.js', category: 'Backend', icon: Server, color: 'text-green-500' },
  { name: 'Express', category: 'Backend', icon: Zap, color: 'text-gray-500' },
  { name: 'PostgreSQL', category: 'Backend', icon: Database, color: 'text-blue-600' },
  { name: 'MongoDB', category: 'Backend', icon: Leaf, color: 'text-green-600' },
  { name: 'Git & GitHub', category: 'Tools', icon: GitBranch, color: 'text-orange-500' },
  { name: 'Vite', category: 'Tools', icon: Wind, color: 'text-purple-600' },
  { name: 'Docker', category: 'Tools', icon: Package, color: 'text-blue-400' },
];

// Individual Skill Card Component with 3D Tilt
const SkillCard = ({ skill, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: mousePosition.x,
        rotateY: mousePosition.y,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all text-center flex flex-col items-center justify-center gap-3 group cursor-pointer overflow-hidden"
    >
      {/* Light Sweep Effect on Hover */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered ? { x: '200%', opacity: [0, 0.5, 0] } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent pointer-events-none"
        style={{ transform: 'skewX(-20deg)' }}
      />

      {/* Soft Glow on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 blur-2xl pointer-events-none bg-gradient-radial from-indigo-500/40 via-purple-500/20 to-transparent"
      />

      {/* Card Content with 3D Depth */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {/* Icon with Pop-out Effect */}
        <motion.div
          animate={isHovered ? { 
            scale: 1.3,
            rotateY: 360,
          } : { 
            scale: 1,
            rotateY: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ 
            transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
            transformStyle: "preserve-3d",
          }}
          className="relative mb-2"
        >
          <Icon className={`w-12 h-12 ${skill.color} transition-all duration-300`} />
          
          {/* Icon Glow */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1.5 }}
              className={`absolute inset-0 ${skill.color} blur-lg -z-10`}
            />
          )}
        </motion.div>
        
        <span 
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ transform: "translateZ(20px)" }}
        >
          {skill.category}
        </span>
        
        <span 
          className="text-base font-medium text-gray-900 dark:text-white block mt-2"
          style={{ transform: "translateZ(25px)" }}
        >
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
