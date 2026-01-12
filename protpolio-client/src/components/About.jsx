import { motion } from "framer-motion";
import { FaUser, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-semibold">
            <span className="icon-bg p-3">
              <FaUser />
            </span>
            About Me
          </h2>
          <p className="text-gray-400 max-w-xl mt-3">
            A snapshot of my professional background, experience, and approach
            to building digital solutions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-primary/50 backdrop-blur-xl 
                       border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="icon-bg p-3">
                <FaBriefcase />
              </span>
              <h3 className="text-2xl font-semibold">
                Full Stack Developer
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              I am a professional Full Stack Developer with{" "}
              <span className="text-accent font-medium">
                3+ years of experience
              </span>{" "}
              building scalable, secure, and user-focused web applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My work philosophy centers around clean architecture, performance
              optimization, and long-term maintainability.
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-primary/40 backdrop-blur-xl 
                       border border-white/10 rounded-2xl p-8"
          >
            <div className="space-y-5 text-gray-300">
              <div>
                <span className="text-xs uppercase text-gray-400">Name</span>
                <p className="text-lg text-white">Akhi Akter</p>
              </div>

              <div>
                <span className="text-xs uppercase text-gray-400">Email</span>
                <p>ruhiakterakhi@gmail.com</p>
              </div>

              <div>
                <span className="text-xs uppercase text-gray-400">Location</span>
                <p>Raypur, Lokkhipur, Bangladesh</p>
              </div>

              <div>
                <span className="text-xs uppercase text-gray-400">
                  Availability
                </span>

                {/* Clickable Live Project */}
                <a
                  href="https://contesthub-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 
                             text-green-400 font-medium
                             hover:text-green-300 transition-colors"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  Open for Projects
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-primary/35 backdrop-blur-xl 
                       border border-white/10 rounded-2xl p-8"
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-semibold text-accent">3+</div>
                <p className="text-xs text-gray-400 mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold text-purple-400">
                  50+
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Projects Completed
                </p>
              </div>

              <div>
                <div className="text-3xl font-semibold text-green-400">
                  100%
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
