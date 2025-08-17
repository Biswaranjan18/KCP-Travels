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
    bgColor: 'bg-[#d46b08]',
    image: chilika,
    cta: 'Discover Nature',
  },
  {
    title: 'Konark Sun Temple',
    subtitle: 'Marvel at this 13th-century architectural wonder shaped like a giant chariot',
    bgColor: 'bg-[#d46b08]',
    image: Konarka_Temple,
    cta: 'Explore History',
  },
  {
    title: 'Puri Beach',
    subtitle: 'Golden sands meeting the Bay of Bengal with stunning sunrise views',
    bgColor: 'bg-[#d46b08]',
    image: puri,
    cta: 'Beach Escape',
  },
  {
    title: 'Bhitarkanika',
    subtitle: 'Mangrove ecosystem with saltwater crocodiles and diverse birdlife',
    bgColor: 'bg-[#d46b08]',
    image: Daringibari_Tour,
    cta: 'Wildlife Tour',
  },
  {
    title: 'Dhauli Hills',
    subtitle: 'Peace pagoda marking the site of Emperor Ashoka\'s transformation',
    bgColor: 'bg-[#d46b08]',
    image: Dhauli_Hills,
    cta: 'Historical Journey',
  },
];

const TourHighlights = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);
  const isUserScrollingRef = useRef(false);
  const cardRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);
  const navigate = useNavigate();

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
    const scrollDuration = 3000;
    
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
      isUserScrollingRef.current = true;
      clearTimeout(scrollTimeoutRef.current);
      
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        
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
    <section 
      className="relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] pt-12 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="tour-highlights"
    >
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Where ancient temples meet pristine nature, creating unforgettable experiences
          </p>
        </div>

        {/* Mobile horizontal scroll container */}
        <div className="lg:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide space-x-4 snap-x snap-mandatory"
            style={{ scrollPaddingTop: '80px' }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className="flex-shrink-0 w-[300px] rounded-2xl shadow-lg group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 snap-start"
                style={{ marginTop: '20px' }}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
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
              style={{ marginTop: '20px' }}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
                </div>
                <Link to="book-car">
                  <button className={`mt-auto w-full px-4 py-2 rounded-lg text-sm font-medium text-white ${item.bgColor} hover:opacity-90 transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:shadow-lg`}>
                    {item.cta} →
                  </button>
                </Link>
              </div>
            </div>
          ))}
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
  );
};

export default TourHighlights;