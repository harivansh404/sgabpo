import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="mb-6 overflow-hidden rounded-lg bg-white ">
      <img src={imageUrl} alt="image" className="w-full" />
      <div className="p-6 text-center  sm:p-7 md:p-7 xl:p-7">
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
      imageUrl: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
      title: '50+ Best creative website themes & templates',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    },
    {
      imageUrl: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg',
      title: 'The ultimate UX and UI guide to card design',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    },
    {
      imageUrl: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg',
      title: 'Creative Card Component designs graphic elements',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="bg-[#F3F4F6] pt-16 pb-8 lg:pt-[100px] lg:pb-16">
      <div className="container mx-auto">
        <div className="-mx-3 flex flex-wrap">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3">
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
