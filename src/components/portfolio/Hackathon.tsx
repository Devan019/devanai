"use client"
import { useState, useEffect } from 'react';
import HackathonCard from './HackathonCard';
import { motion } from 'framer-motion';
import {
  FiSearch,
  FiFilter,
  FiX,
  FiMapPin,
} from 'react-icons/fi';
import { hackathonsData } from '@/data/hackathon.data';
// import { HeroHighlight } from '../ui/hero-highlight';

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HackathonsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [ascending, setAscending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Get unique locations for filter
  const locations = ['all', ...new Set(hackathonsData.map(hack => hack.location))];

  // Sort hackathons
  const sortHackathons = (a: typeof hackathonsData[0], b: typeof hackathonsData[0]) => {
    if (sortBy === 'date') {
      const dateA = new Date(a.date.split('-')[0]);
      const dateB = new Date(b.date.split('-')[0]);
      return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    } else if (sortBy === 'title') {
      return ascending
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortBy === 'location') {
      return ascending
        ? a.location.localeCompare(b.location)
        : b.location.localeCompare(a.location);
    }
    return 0;
  };

  // Filter hackathons based on search, category and location
  const filteredHackathons = hackathonsData
    .filter(hackathon => {
      const matchesSearch =
        hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
        hackathon.problemStatement.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = activeFilter === 'all' || hackathon.category === activeFilter;
      const matchesLocation = selectedLocation === 'all' || hackathon.location === selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    })
    .sort(sortHackathons);

  // Loading skeleton
  const HackathonSkeleton = () => (
    <div className="rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse h-[520px] min-w-[350px]">
      <div className="h-full w-full p-6 flex flex-col">
        <div className="flex justify-between mb-4">
          <div className="space-y-3">
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="h-48 w-full bg-gray-300 dark:bg-gray-700 rounded-xl mb-6"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="mt-auto space-y-2">
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen  m-4">
      {/* <HeroHighlight className='max-w-full '> */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 relative overflow-hidden px-4 rounded-2xl"
        >
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md">
              My Hackathon Journey
            </h1>
            <p className="text-lg text-white/90 mx-auto max-w-2xl leading-relaxed">
              Showcasing innovative projects from hackathons I{"'"}ve participated in around the world.
              Each project represents a unique challenge tackled in 24-72 hours.
            </p>
          </div>
        </motion.div>

        {/* Control Bar */}
        <div className="max-w-[95%] mx-auto rounded-xl shadow-md p-4 bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search by title, technology, or problem statement..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {showFilters ? <FiX className="mr-2" /> : <FiFilter className="mr-2" />}
                {showFilters ? 'Hide Filters' : 'Filters'}
              </button>

              {/* Location Filter */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="appearance-none pl-3 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                  <FiMapPin className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>

              {/* Sort Controls */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-3 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                  <option value="location">Sort by Location</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Sort Direction Toggle */}
              <button
                onClick={() => setAscending(!ascending)}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {ascending ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Results count and summary */}
          <div className="mb-6 flex items-center justify-between mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Showing <span className="font-medium">{filteredHackathons.length}</span> of{" "}
              <span className="font-medium">{hackathonsData.length}</span> hackathons
            </p>

            {/* Clear filters button - only show if filters are applied */}
            {(activeFilter !== 'all' || searchTerm || selectedLocation !== 'all') && (
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                  setSelectedLocation('all');
                }}
                className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 flex items-center gap-1"
              >
                <FiX className="w-4 h-4" />
                Clear filters
              </button>
            )}
          </div>

          {/* Swiper Slider */}
          <div className="relative max-w-full ">
            {isLoading ? (
              <div className="flex gap-6 pb-6">
                {[...Array(1)].map((_, i) => (
                  <div key={i} className="flex-shrink-0" style={{ minWidth: '350px' }}>
                    <HackathonSkeleton />
                  </div>
                ))}
              </div>
            ) : filteredHackathons.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={24}
                slidesPerView={'auto'}
                centeredSlides={false}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  type: 'bullets',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="!pb-12"
              >
                {filteredHackathons.map((hackathon, idx) => (
                  <SwiperSlide key={idx} className="!w-auto">
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 min-w-full"
                    >
                      <HackathonCard {...hackathon} />
                    </motion.div>
                  </SwiperSlide>
                ))}

                {/* Navigation buttons */}
                <div className="swiper-button-prev !text-purple-500 !left-0" />
                <div className="swiper-button-next !text-purple-500 !right-0" />

                {/* Pagination */}
                <div className="swiper-pagination !bottom-0" />
              </Swiper>
            ) : (
              // No results message
              <div className="w-full flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-4">
                  <FiSearch className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No hackathons found</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  No hackathons match your current filters. Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </HeroHighlight> */}
    </div>
  );
};

export default HackathonsPage;