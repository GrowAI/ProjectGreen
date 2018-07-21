module.exports = function(sequelize, DataTypes) {
  var nodeData = sequelize.define("nodeData", {
    client_id: {
      type: DataTypes.STRING,
      allowNull: false

    },
    room_id: {
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
