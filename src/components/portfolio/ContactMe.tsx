"use client"
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi';
import { MailIcon } from 'lucide-react';
import { IconBrandLeetcode } from '@tabler/icons-react';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div
      className="w-full min-h-[60vh] relative"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 'var(--portfolio-grid-opacity)',
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, var(--portfolio-grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--portfolio-grid-color) 1px, transparent 1px)',
        }}
      />

      <div className="w-full z-10 relative transition-colors duration-300">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1
              className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl"
              style={{ color: 'var(--portfolio-text)' }}
            >
              Get in Touch
            </h1>
            <p
              className="text-lg"
              style={{ color: 'var(--portfolio-text-secondary)' }}
            >
              Have a project in mind or want to collaborate? Drop me a message!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden w-full lg:w-[60%] mb-8 lg:mb-0 lg:mr-8"
              style={{
                border: '1px solid var(--portfolio-card-border)',
              }}
            >
              <div className="h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4124884749954!2d73.12071417503448!3d21.135976680540296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be067ad4708976b%3A0xf907790f1239c673!2sVENETIAN%20VILLA!5e0!3m2!1sen!2sin!4v1747671672065!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="min-h-[300px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Info Below Map */}
              <div
                className="p-6 flex justify-center items-center"
                style={{ backgroundColor: 'var(--portfolio-card)' }}
              >
                <motion.div
                  className="flex flex-wrap gap-4 justify-center items-center"
                  variants={containerVariants}
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg flex items-center transition-colors"
                    style={{
                      backgroundColor: 'var(--portfolio-surface)',
                      border: '1px solid var(--portfolio-card-border)',
                    }}
                  >
                    <MailIcon className="text-xl mr-3" style={{ color: 'var(--portfolio-accent)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--portfolio-text-secondary)' }}>Email</p>
                      <p className="font-medium" style={{ color: 'var(--portfolio-text)' }}>devanchauhan012@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg flex items-center transition-colors"
                    style={{
                      backgroundColor: 'var(--portfolio-surface)',
                      border: '1px solid var(--portfolio-card-border)',
                    }}
                  >
                    <FiPhone className="text-xl mr-3" style={{ color: 'var(--portfolio-accent)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--portfolio-text-secondary)' }}>Phone</p>
                      <p className="font-medium" style={{ color: 'var(--portfolio-text)' }}>+91 90232 40018</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg flex items-center transition-colors"
                    style={{
                      backgroundColor: 'var(--portfolio-surface)',
                      border: '1px solid var(--portfolio-card-border)',
                    }}
                  >
                    <FiMapPin className="text-xl mr-3" style={{ color: 'var(--portfolio-accent)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--portfolio-text-secondary)' }}>Address</p>
                      <p className="font-medium" style={{ color: 'var(--portfolio-text)' }}>12, Venetian Vill, bardoli</p>
                    </div>
                  </motion.div>

                  <div className="flex items-center justify-center space-x-4 col-span-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://youtube.com/@Devan-en3tn"
                      target="_blank"
                      className="p-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'var(--portfolio-surface)',
                        border: '1px solid var(--portfolio-card-border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
                      }}
                    >
                      <FiYoutube className="text-xl" style={{ color: 'var(--portfolio-accent)' }} />
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://www.linkedin.com/in/devan-chauhan"
                      target="_blank"
                      className="p-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'var(--portfolio-surface)',
                        border: '1px solid var(--portfolio-card-border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
                      }}
                    >
                      <FiLinkedin className="text-xl" style={{ color: 'var(--portfolio-accent)' }} />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://github.com/Devan019"
                      target="_blank"
                      className="p-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'var(--portfolio-surface)',
                        border: '1px solid var(--portfolio-card-border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
                      }}
                    >
                      <FiGithub className="text-xl" style={{ color: 'var(--portfolio-accent)' }} />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://leetcode.com/u/devanchauhan012/"
                      target="_blank"
                      className="p-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'var(--portfolio-surface)',
                        border: '1px solid var(--portfolio-card-border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
                      }}
                    >
                      <IconBrandLeetcode className="text-xl" style={{ color: 'var(--portfolio-accent)' }} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}