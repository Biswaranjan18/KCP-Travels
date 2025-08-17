import React, { useEffect, useRef, useState } from 'react';
import Dhauli_Hills from '../assets/Dhauli Hills.webp';
import jaganatha from '../assets/jaganatha.webp';
import chilika from '../assets/chilika.webp';
import Konarka_Temple from '../assets/Konarka_Temple.webp';
import Daringibari_Tour from '../assets/Daringibari-Tour.webp';
import puri from '../assets/puri.webp';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const highlights = [
  {
    title: 'Jagannath Temple',
    subtitle: 'Experience the divine Rath Yatra festival at this sacred 12th-century temple',
    bgColor: 'bg-[#d46b08]',
    image: jaganatha,
    cta: 'Explore Spirituality',
  },
  {
    title: 'Chilika Lake',
    subtitle: 'Boat through Asia\'s largest brackish water lagoon, home to Irrawaddy dolphins',
    bgColor: 'bg-[#08979c]',
    image: chilika,
    cta: 'Discover Nature',
  },
  {
    title: 'Konark Sun Temple',
    subtitle: 'Marvel at this 13th-century architectural wonder shaped like a giant chariot',
    bgColor: 'bg-[#d48806]',
    image: Konarka_Temple,
    cta: 'Explore History',
  },
  {
    title: 'Puri Beach',
    subtitle: 'Golden sands meeting the Bay of Bengal with stunning sunrise views',
    bgColor: 'bg-[#1d39c4]',
    image: puri,
    cta: 'Beach Escape',
  },
  {
    title: 'Bhitarkanika',
    subtitle: 'Mangrove ecosystem with saltwater crocodiles and diverse birdlife',
    bgColor: 'bg-[#389e0d]',
    image: Daringibari_Tour,
    cta: 'Wildlife Tour',
  },
  {
    title: 'Dhauli Hills',
    subtitle: 'Peace pagoda marking the site of Emperor Ashoka\'s transformation',
    bgColor: 'bg-[#531dab]',
    image: Dhauli_Hills,
    cta: 'Historical Journey',
  },
];

const BestTourPlace = () => {
     const scrollContainerRef = useRef(null);
      const animationRef = useRef(null);
      const [currentCard, setCurrentCard] = useState(0);
      const isUserScrollingRef = useRef(false);
      const cardRefs = useRef([]);
      const scrollTimeoutRef = useRef(null);
      const navigate = useNavigate();
    
      // Initialize card refs
      useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, highlights.length);
      }, []);
    
      const scrollToCard = (index) => {
        if (!scrollContainerRef.current || index >= highlights.length) return;
        
        const container = scrollContainerRef.current;
        const card = cardRefs.current[index];
        if (!card) return;
    
        const containerWidth = container.clientWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.clientWidth;
        
        const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      };
    
      const startAutoScroll = () => {
        if (isUserScrollingRef.current) return;
        
        scrollToCard(currentCard);
        
        const nextCard = (currentCard + 1) % highlights.length;
        const scrollDuration = 3000; // 3 seconds per card
        
        animationRef.current = setTimeout(() => {
          setCurrentCard(nextCard);
        }, scrollDuration);
      };
    
      useEffect(() => {
        startAutoScroll();
        return () => clearTimeout(animationRef.current);
      }, [currentCard]);
    
      useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        
        const handleScroll = () => {
          // Detect manual scrolling
          isUserScrollingRef.current = true;
          clearTimeout(scrollTimeoutRef.current);
          
          // After 3 seconds of inactivity, resume auto-scroll
          scrollTimeoutRef.current = setTimeout(() => {
            isUserScrollingRef.current = false;
            
            // Find which card is closest to center
            const containerCenter = container.scrollLeft + (container.clientWidth / 2);
            let closestCard = 0;
            let minDistance = Infinity;
            
            cardRefs.current.forEach((card, index) => {
              if (card) {
                const cardCenter = card.offsetLeft + (card.clientWidth / 2);
                const distance = Math.abs(cardCenter - containerCenter);
                if (distance < minDistance) {
                  minDistance = distance;
                  closestCard = index;
                }
              }
            });
            
            setCurrentCard(closestCard);
          }, 3000);
        };
    
        container.addEventListener('scroll', handleScroll);
        return () => {
          container.removeEventListener('scroll', handleScroll);
          clearTimeout(scrollTimeoutRef.current);
        };
      }, []);
  return (
     <section className="relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#d46b08]/10 blur-xl"></div>
      <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-[#08979c]/10 blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-[#d46b08] bg-[#fff7e6] rounded-full mb-4">
            Odisha's Wonders
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4 leading-tight">
            Discover the <span className="text-[#d46b08]">Soul</span> of Eastern India
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where ancient temples meet pristine nature, creating unforgettable experiences
          </p>
        </div>

        {/* Mobile horizontal scroll container */}
        <div className="lg:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide space-x-4 snap-x snap-mandatory"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className="flex-shrink-0 w-[300px] rounded-2xl shadow-lg group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 snap-start"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 ${item.bgColor}/30 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3> {/* Changed from text-2xl to text-xl */}
                  <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p> {/* Changed from text-base to text-sm */}
                  <Link to="book-car">
                  <button className={`w-full px-4 py-2 rounded-lg text-sm font-medium text-white ${item.bgColor} hover:opacity-90 transition-all duration-300`}>
                    {item.cta} →
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${item.bgColor}/30 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="bg-white p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3> {/* Changed from text-2xl to text-xl */}
                  <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p> {/* Changed from text-base to text-sm */}
                </div>
                <Link  to="book-car">
                <button className={`mt-auto w-full px-4 py-2 rounded-lg text-sm font-medium text-white ${item.bgColor} hover:opacity-90 transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:shadow-lg`}>
                  {item.cta} →
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button onClick={()=> navigate('/tour-highlights')} className="px-8 py-4 border-2 border-[#d46b08] text-base font-medium rounded-lg text-[#d46b08] hover:bg-[#d46b08] hover:text-white md:text-lg transition-all duration-300 hover:shadow-lg flex items-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            View All 12 Destinations
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .snap-x {
            scroll-snap-type: x mandatory;
          }
          .snap-start {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  )
}

export default BestTourPlace
