module.exports = function(sequelize, DataTypes) {
  var nodeData = sequelize.define("nodeData", {
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
  return nodeData;
};
