module.exports = function (sequelize, DataTypes) {
	return sequelize.define('likert_template_result', {
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		templateId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'likert_template',
				key: 'key'
			}
		},
		moodId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'moods',
				key: 'id'
			}
		},
		songId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'songs',
				key: 'id'
			}
		},
		scaleId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'likert_template_values',
				key: 'id'
			}
		},
		scaleScore: DataTypes.INTEGER
	});
};
