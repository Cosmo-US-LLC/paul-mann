import React from 'react';

const WaterSolutions = () => {
  const solutions = [
    {
      title: 'Greywater Recycling',
      description:
        'Recycle greywater for up to 50% reduction in water usage. Essential for dry regions and water conservation.',
      icon: '🚰',
    },
    {
      title: 'Raw Greywater Systems',
      description:
        'Reduce potable water need by filtering and treating greywater for irrigation and other uses.',
      icon: '💧',
    },
    {
      title: 'Rainwater Harvesting',
      description:
        'Reduce potable water use by storing and utilizing rainwater for gardens, toilets, and more.',
      icon: '🌧️',
    },
    {
      title: 'Water Efficiency Solutions',
      description:
        'Optimize water use by up to 30% with recirculating showers, efficient appliances, and more.',
      icon: '⚡',
    },
    {
      title: 'Permaculture Solutions',
      description:
        'Increase water retention by 50-80% in dry soils, supporting sustainable agriculture and biodiversity.',
      icon: '🌿',
    },
    {
      title: 'Water Production & Purification',
      description:
        'Supplies to ensure new water production and purification as needed.',
      icon: '🏭',
    },
  ];

  return (
    <section className="px-20 py-10 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Making Water Go Farther</h1>
      <p className="mb-12 text-lg text-center text-gray-600">
        Water Champions provides innovative solutions to manage and conserve water resources efficiently.
      </p>
      <div className="grid grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center bg-white shadow-lg rounded-2xl"
          >
            <div className="mb-4 text-5xl">{solution.icon}</div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800">{solution.title}</h2>
            <p className="text-base text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaterSolutions;
