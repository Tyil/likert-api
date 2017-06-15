module.exports = function (sequelize, DataTypes) {
	return sequelize.define('previously_listened', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        songId: {
            allowNull: false,
            references: {
				model: 'songs',
				key: 'id'
			},
            type: DataTypes.INTEGER
        }
	}, 
    {
		timestamps: false
	});
};
