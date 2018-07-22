module.exports = function(sequelize, DataTypes) {
  var nodes = sequelize.define("nodes", {
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
    temperature: {
      type: DataTypes.STRING,
      allowNull: false
    },  
     humidity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    r: {
      type: DataTypes.STRING,
      allowNull: false
    },
    g: {
      type: DataTypes.STRING,
      allowNull: false
    },
    b: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lux: {
      type: DataTypes.STRING,
      allowNull: false
    },
    full: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visible: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ir: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roomId: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
  });
  return nodes;
};
