"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { AuroraBackground } from '../ui/aurora-background';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/Textarea';
import { WavyBackground } from '../ui/wavy-background';
import { MailIcon } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, message });
  };

  return (
    // <WavyBackground className=" w-screen mx-auto min-h-screen overflow-x-hidden">
    <AuroraBackground className='h-full w-full'>
      <div className="w-full z-50 transition-colors duration-300">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or want to collaborate? Drop me a message!
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center w-full">
            {/* Left Side - Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-2xl w-full lg:w-[40%] mb-8 lg:mb-0 lg:mr-8"
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
              <div className="p-6 bg-white dark:bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center"
                  >
                    <MailIcon className="text-xl mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium text-gray-900 dark:text-white">devanchauhan012@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center"
                  >
                    <FiPhone className="text-xl mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="font-medium text-gray-900 dark:text-white">+91 90232 40018</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center"
                  >
                    <FiMapPin className="text-xl mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                      <p className="font-medium text-gray-900 dark:text-white">12, Venetian Vill, bardoli</p>
                    </div>
                  </motion.div>

                  <div className="flex items-center justify-center space-x-4 col-span-2">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://instagram.com"
                      target="_blank"
                      className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 dark:bg-gray-800 dark:hover:bg-pink-600"
                    >
                      <FiInstagram className="text-xl text-pink-600 dark:text-pink-400" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://twitter.com"
                      target="_blank"
                      className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-600"
                    >
                      <FiTwitter className="text-xl text-blue-600 dark:text-blue-400" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://linkedin.com"
                      target="_blank"
                      className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-700"
                    >
                      <FiLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://github.com"
                      target="_blank"
                      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600"
                    >
                      <FiGithub className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-xl shadow-2xl bg-white dark:bg-gray-900 w-full lg:w-[40%]"
            >
              <form className="space-y-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-1"
                >
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-1"
                >
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-1"
                >
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='h-[150px] justify-start items-start'
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-medium shadow-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
    // </WavyBackground>
  );
}