import React from 'react';
import head1 from '../../images/home/head_1.png';
import head2 from '../../images/home/head_2.png';
import head3 from '../../images/home/head_3.png';
import head4 from '../../images/home/head_4.png';
import head5 from '../../images/home/head_5.png';

// --- Data for the banners ---
const bannersData = [
  {
    id: 1,
    size: 'large',
    alignment: 'left',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    title: 'EKO 40" Android TV',
    subtitle: 'SMART FULL, HD ANDROID TV WITH GOOGLE ASSISTANT',
    buttonText: 'Shop Now',
    buttonBg: 'bg-indigo-600',
    buttonHoverBg: 'hover:bg-indigo-700',
    imageUrl: head1,
    imageAlt: 'EKO 40 Inch Android TV',
  },
  {
    id: 2,
    size: 'small',
    alignment: 'right',
    bgColor: 'bg-indigo-700',
    textColor: 'text-white',
    title: 'Humidifying Fan',
    subtitle: 'From $299',
    buttonText: 'Discover Now',
    buttonBg: 'bg-white',
    buttonHoverBg: 'hover:bg-gray-100',
    buttonTextColor: 'text-gray-900',
    imageUrl: head2,
    imageAlt: 'Humidifying Fan',
    heightClass: 'h-96', // Custom height for this card
    imagePositionClass: 'left-0 w-2/3 object-contain', // <-- NEW: Custom image positioning
  },
  {
    id: 3,
    size: 'small',
    alignment: 'left',
    bgColor: 'bg-amber-100',
    textColor: 'text-gray-900',
    title: 'iPad mini 2022',
    subtitle: 'Mega Power in mini size',
    buttonText: 'Shop Now',
    buttonBg: 'bg-gray-900',
    buttonHoverBg: 'hover:bg-gray-700',
    buttonTextColor: 'text-white',
    imageUrl: head3,
    imageAlt: 'iPad mini 2022',
  },
  {
    id: 4,
    size: 'small',
    alignment: 'right',
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    title: 'Air Purifier',
    subtitle: 'From $169',
    buttonText: 'Shop Now',
    buttonBg: 'bg-gray-700',
    buttonHoverBg: 'hover:bg-gray-600',
    buttonTextColor: 'text-white',
    imageUrl: head4,
    imageAlt: 'Air Purifier',
  },
  {
    id: 5,
    size: 'small',
    alignment: 'center',
    bgColor: 'bg-gray-200',
    textColor: 'text-gray-900',
    title: 'Washing Machine',
    subtitle: 'Anatico Max 2',
    buttonText: 'Shop Now',
    buttonBg: 'bg-white',
    buttonHoverBg: 'hover:bg-gray-100',
    buttonTextColor: 'text-gray-900',
    imageUrl: head5,
    imageAlt: 'Washing Machine',
  },
];


// --- Sub-component for a single banner ---
const BannerCard = ({ banner }) => {
  const isLarge = banner.size === 'large';
  const isTextRight = banner.alignment === 'right';
  const isTextLeft = banner.alignment === 'left';
  const isTextCenter = banner.alignment === 'center';

  return (
    <div 
      className={`relative rounded-xl overflow-hidden p-6 flex items-center
                  ${isLarge ? 'col-span-2' : 'col-span-1'} 
                  ${banner.bgColor} ${banner.textColor} 
                  ${banner.heightClass || (isLarge ? 'h-96' : 'h-64')}` // <-- UPDATED LOGIC HERE
                }
    >
      {/* Background Image */}
      <img 
        src={banner.imageUrl} 
        alt={banner.imageAlt} 
        className={`absolute inset-0 h-full w-full object-cover 
                    ${isLarge ? 'object-right' : ''}
                    ${isTextLeft && !isLarge ? 'object-right' : ''} 
                    ${isTextRight && !isLarge ? 'object-left' : ''}
                    ${isTextCenter ? 'object-cover' : ''}
                    `}
      />
      {/* Overlay for text readability */}
      <div className={`absolute inset-0 ${banner.bgColor} opacity-15`}></div>

      {/* Content Container */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-center
                       ${isTextLeft ? 'items-start text-left' : ''}
                       ${isTextRight ? 'items-end text-right' : ''}
                       ${isTextCenter ? 'items-center text-center' : ''}
                      ${isLarge ? 'max-w-md ml-8' : 'max-w-xs'}`}>
        <h3 className={`font-bold ${isLarge ? 'text-4xl' : 'text-2xl'}`}>{banner.title}</h3>
        <p className={`mt-2 ${isLarge ? 'text-lg' : 'text-sm'} opacity-90`}>{banner.subtitle}</p>
        <button 
          className={`mt-6 px-6 py-3 rounded-lg font-semibold whitespace-nowrap
                      ${banner.buttonBg} ${banner.buttonHoverBg} ${banner.buttonTextColor || 'text-white'} 
                      transition-colors duration-200`}
        >
          {banner.buttonText}
        </button>
      </div>
    </div>
  );
};


// --- Main Component ---
const FeaturedBanners = () => {
  return (
    <section className="bg-white py-0">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bannersData.map((banner) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanners;