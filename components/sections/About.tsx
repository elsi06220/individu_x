"use client";

import { motion } from "framer-motion";
import { Shield, Target, Brain, } from "lucide-react";
import { SiHiveBlockchain, } from "react-icons/si";
import { FaIdBadge } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute h-[80vh] w-[80vh] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-30"
            animate={{
              x: [0, 120, -120, 0],
              y: [0, -120, 120, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute h-[60vh] w-[60vh] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 rounded-full blur-3xl opacity-25"
            animate={{
              x: [-120, 120, 0],
              y: [100, -100, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-gradient"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Découvrez
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-gray-400"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           Passionnés par le monde qui nous entoure, je décide de mettre a profit mes connaissance
           afin de regrouper des personnes qui ont la meme ambition que moi. La géopolitique, les crypto-monnaies 
           ou bien le numérique en général sont des axes importants à matriser, 
           celui qui les comprend aujourd'hui est le gagnant de demain ! 
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[ 
              {
                icon: <FaIdBadge className="w-10 h-10 mx-auto text-gradient" />,
                title: "Politique",
                description: "Informations en temp et en heure avec des source fiables",
              },
              {
                icon: <SiHiveBlockchain  className="w-12 h-12 mx-auto text-gradient" />,
                title: "Crypto",
                description: "Tous les actus crypto et les pépites à dénicher ici",
              },
              {
                icon: <Brain className="w-12 h-12 mx-auto text-gradient" />,
                title: "IA Innovation",
                description: "Tous les outils IA nécessaires avec les bon tips ",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
