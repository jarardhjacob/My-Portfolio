import React from 'react';
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
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all text-center flex flex-col items-center justify-center gap-3 group cursor-pointer"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative"
                >
                  <Icon className={`w-12 h-12 ${skill.color} transition-colors duration-300`} />
                </motion.div>
                
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.category}
                </span>
                
                <span className="text-base font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
