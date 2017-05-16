module.exports = (sequelize, dataTypes) => {
	return sequelize.define("genre", {
	  genreId: {
		type: dataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  name: {
		type: dataTypes.STRING,
		allowNull: false
	  }
	}, {
	  timestamps: false
	});
};