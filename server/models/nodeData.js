module.exports = function(sequelize, DataTypes) {
  var nodeData = sequelize.define("nodeData", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userID: {
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
