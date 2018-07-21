module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        subscription: {
            type: DataTypes.STRING,
            defaultValue: "basic"
        },
        inactive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          }
    });
    return users;
  };