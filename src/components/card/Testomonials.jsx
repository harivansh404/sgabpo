import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="mb-6 overflow-hidden rounded-lg bg-white">
    <img src={imageUrl} alt="image" className="w-full h-64 object-scale-down" />
    <div className="p-6 text-center sm:p-2 md:p-2 xl:p-2">
      <h3>
        <a
          href="javascript:void(0)"
          className="text-black hover:text-primary mb-3 block text-xl font-semibold sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-lg"
        >
          {title}
        </a>
      </h3>
      <p className="text-black mb-4 text-base leading-relaxed">
        {description}
      </p>
      <a
        href="javascript:void(0)"
        className="text-black hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-6 text-base font-medium transition hover:text-gray-500"
      >
        View Details
      </a>
    </div>
  </div>
);
};

const Testimonials = () => {
  const cardsData = [
    {
      imageUrl: 'Services1.png',
      title: '50+ Best creative website themes & templates',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    },
    {
      imageUrl: 'Services2.png',
      title: 'The ultimate UX and UI guide to card design',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    },
    {
      imageUrl: 'Services3.png',
      title: 'Creative Card Component designs graphic elements',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    },
  ];

  return (
  
    <section className="bg-[#F3F4F6] pt-16 pb-8 lg:pt-[100px] lg:pb-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} className="h-full">
              {/* Added h-full class to control the height of the cards */}
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
