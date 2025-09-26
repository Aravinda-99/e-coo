import React from 'react';
import { ArrowRight } from 'lucide-react'; // Optional: for an icon next to "View All"
import cat1Image from '../../images/home/cat1.png';
import cat2Image from '../../images/home/cat2.png';
import cat3Image from '../../images/home/cat3.png';
import cat4Image from '../../images/home/cat4.png';
import cat5Image from '../../images/home/cat5.png';
import cat6Image from '../../images/home/cat6.png';
import cat7Image from '../../images/home/cat7.png';
import cat8Image from '../../images/home/cat8.png';
import cat9Image from '../../images/home/cat9.png';
import cat10Image from '../../images/home/cat10.png';

// --- Data for the categories ---
// In a real application, this data would likely come from an API.
const categoriesData = [
  {
    name: 'Gaming',
    imageUrl: cat1Image,
  },
  {
    name: 'Sport Equip',
    imageUrl: cat2Image,
  },
  {
    name: 'Kitchen',
    imageUrl: cat3Image,
  },
  {
    name: 'Robot Cleaner',
    imageUrl: cat4Image,
  },
  {
    name: 'Mobiles',
    imageUrl: cat5Image,
  },
  {
    name: 'Office',
    imageUrl: cat6Image,
  },
  {
    name: 'Cameras',
    imageUrl: cat7Image,
  },
  {
    name: 'Computers',
    imageUrl: cat8Image,
  },
  {
    name: 'Televisions',
    imageUrl: cat9Image,
  },
  {
    name: 'Audios',
    imageUrl: cat10Image,
  },
];

// --- The Category Item Sub-component ---
const CategoryItem = ({ name, imageUrl }) => (
  <div className="flex flex-col items-center flex-shrink-0">
    <a href="#" className="block group">
      <div className="w-25 h-25 p-5 bg-gray-100 rounded-full flex items-center justify-center
                      group-hover:bg-indigo-100 transition-colors duration-300 ">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-full w-full object-contain" 
        />
      </div>
    </a>
    <p className="mt-3 text-sm font-semibold text-gray-800">{name}</p>
  </div>
);


// --- The Main Component ---
const PopularCategories = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* ## Component Header ## */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
            View All
            {/* Optional Icon: <ArrowRight className="h-4 w-4 ml-1" /> */}
          </a>
        </div>

        {/* ## Categories Grid / Scroller ## */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {categoriesData.map((category) => (
            <CategoryItem 
              key={category.name} 
              name={category.name} 
              imageUrl={category.imageUrl} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PopularCategories;