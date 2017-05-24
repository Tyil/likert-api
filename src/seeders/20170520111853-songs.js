'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('songs', [{
        name: "Bohemian Rhapsody",
        path: "",
        tag: "Vis",
        artistId: 1,
        albumId: 1,
        genreId: 1,
        moodId: 1
      }]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
