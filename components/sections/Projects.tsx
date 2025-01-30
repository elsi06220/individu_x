"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Flyer",
    description:
      "Boostez votre audience en présentant votre flyer fait sur mesure, qui ne manquera pas de faire effet",
     github: "https://github.com/kokatesaurabh/MAK-75-Framework", 
    tags: ["Figma", "Coolors"],
  },
  {
    title: "Vidéo-montage",
    description:
      "Une présentation de votre activité, clair net et précis regroupez dans une vidéo.",
    github: "https://github.com/kokatesaurabh/Cyber-Jarvis",
    tags: ["Capcut", "Filmora", ],
  },
   {
    title: "Site clé en main",
    description:
      "choissisez votre format de site, que sa soit un site vitrine ou e-commerce",
    github: "https://github.com/kokatesaurabh/VulnHawk-The-Ultimate-Static-Analysis-Framework.git",
    tags: ["Wordpress", "React", "Laravel" ],
  }, 
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white relative overflow-hidden bg-black">
      {/* Animated Background moved outside content */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Moving Circles with Blurring Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-700 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Title with Hybrid Gradient */}
          <h2 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-black">
            🚀 Services
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* Hybrid Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-black opacity-0 group-hover:opacity-50 blur-lg transition duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium bg-gradient-to-br from-purple-700 to-pink-700 text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                 {/*  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

         {/*  <div className="text-center mt-16">
            <a
              href="https://github.com/kokatesaurabh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all"
            >
             
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
