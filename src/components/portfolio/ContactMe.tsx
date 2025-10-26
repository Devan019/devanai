"use client"
// import { useState } from 'react';
import { motion } from 'framer-motion';
import {  FiPhone, FiMapPin, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi';
import { AuroraBackground } from '../ui/aurora-background';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Textarea } from '../ui/Textarea';
import { MailIcon } from 'lucide-react';
import { IconBrandLeetcode } from '@tabler/icons-react';

export default function ContactPage() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log({ name, email, message });
  // };

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
            <h1 className="text-4xl font-bold  text-white mb-4  md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300">
              Have a project in mind or want to collaborate? Drop me a message!
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center w-full">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-2xl w-full lg:w-[60%] mb-8 lg:mb-0 lg:mr-8"
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
              <div className="p-6 bg-gray-900 flex justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-lg bg-gray-800 flex items-center"
                  >
                    <MailIcon className="text-xl mr-3 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium text-white">devanchauhan012@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className=" p-4 rounded-lg bg-gray-800 flex items-center"
                  >
                    <FiPhone className="text-xl mr-3 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium text-white">+91 90232 40018</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-lg bg-gray-800 flex items-center"
                  >
                    <FiMapPin className="text-xl mr-3 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="font-medium text-white">12, Venetian Vill, bardoli</p>
                    </div>
                  </motion.div>

                  <div className="flex items-center justify-center space-x-4 col-span-2">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://youtube.com/@Devan-en3tn"
                      target="_blank"
                      className="p-3 rounded-full  bg-gray-800 hover:bg-pink-600"
                    >
                      <FiYoutube className="text-xl text-pink-400" />
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://www.linkedin.com/in/devan-chauhan"
                      target="_blank"
                      className="p-3 rounded-full  bg-gray-800 hover:bg-blue-700"
                    >
                      <FiLinkedin className="text-xl text-blue-400" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://github.com/Devan019"
                      target="_blank"
                      className="p-3 rounded-full bg-gray-800 hover:bg-gray-600"
                    >
                      <FiGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href="https://leetcode.com/u/devanchauhan012/"
                      target="_blank"
                      className="p-3 rounded-full bg-gray-800 hover:bg-yellow-600"
                    >
                      <IconBrandLeetcode className="text-xltext-yellow-400" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            
          </div>
        </div>
      </div>
    </AuroraBackground>
    // </WavyBackground>
  );
}