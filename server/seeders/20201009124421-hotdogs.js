module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('hotdogs', [
      {
        name: 'New York City',
        price: 3,
        description:
          'New Yorkers eat more hot dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, it will come served with steamed onions and a pale, deli-style yellow mustard.',
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-new-york.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicago',
        price: 3.5,
        description:
          'The possible antithesis to New York dogs, Chicago dogs are layered with yellow mustard, dark green relish, chopped raw onion, pickle spear, sport peppers, tomato slices and topped with a dash of celery salt and served in a poppy seed bun.',
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-chicago.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Atlanta and the South',
        price: 3,
        description:
          "Buying a hot dog at Turner Field, home of the Atlanta Braves, or elsewhere in Atlanta and the south, you'll find your dog topped with coleslaw and perhaps some delicious Vidalia onions.",
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-south.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kansas City',
        price: 4,
        description:
          "Get the mints out - you'll need them when you order up a hot dog in KC as it is served with sauerkraut and melted Swiss cheese on a sesame seed bun.",
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-kansas.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Rockie Dog',
        price: 3,
        description:
          'Served at Coors Field, the home of the Colorado Rockies - is a foot-long dog with grilled peppers, kraut and onions.',
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-rockie.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Fenway Frank',
        price: 3.75,
        description:
          "Served at none other than Fenway Park - is the only dog to eat while watching the Red Sox. It's boiled and grilled and served in a New England style bun with mustard and relish. New England dogs can also be found topped with Boston baked beans.",
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-fenway.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sonoran Dog',
        price: 3.5,
        description:
          'This Southwestern favorite features a grilled, bacon-wrapped hot dog on a sturdy bun, pinto beans, grilled onions and green peppers, chopped fresh tomatoes, relish, tomatillo jalapeno salsa, mayonnaise, mustard and shredded cheese.',
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-sonoran.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Texas Dog',
        price: 3.25,
        description:
          'Chili, cheese and jalapenos make this the favored item at Minute Maid Park in Houston.',
        image:
          'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-texas.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hotdogs', null, {});
  },
};
