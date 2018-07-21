module.exports = function(sequelize, DataTypes) {
  var Service = sequelize.define("Service", {
    name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Service;
};
