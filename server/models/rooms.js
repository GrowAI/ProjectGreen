module.exports = function(sequelize, DataTypes) {
  var rooms = sequelize.define("rooms", {
      id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
      },
      roomSize: {
          type: DataTypes.STRING,
          allowNull: false
      },
      nodeCount: {
          type: DataTypes.STRING,
      },
      
      
  });
  return rooms;
};