module.exports = function(sequelize, DataTypes) {
  var nodeData = sequelize.define("nodeData", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nodeId: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },   nodeType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tempeture: {
      type: DataTypes.STRING,
      allowNull: false
    },  
     humidity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roomId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
  });
  return nodeData;
};
