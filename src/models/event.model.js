import sequelize from "./index";
import { DataTypes } from "sequelize";
import UserModel from "./user.model";

const EventModal = sequelize.define(
  "Event",
  {
    title: {
      type: DataTypes.STRING,
    },
    isEvent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idPath: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    slug: {
      type: DataTypes.STRING,
      unique: {
        msg: "Sự kiện không được trùng nhau",
      },
      allowNull: false,
    },

    timeEvent: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    visiable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: true, freezeTableName: true }
);
UserModel.hasMany(EventModal, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  },
  targetKey: "id",
});
EventModal.belongsTo(UserModel, {
  foreignKey: "user_id",
});
EventModal.sync({ alter: true });
export default EventModal;

//   id integer [primary key]
//   name varchar
//   description varchar
//   image varchar
//   filter category_filter
//   slug varchar
//   visiable bool
//   createdAt datetiem
//   updatedAt dateime
//
//   category_filter /rod là cần câu, bait là mồi câu,food là món nhậu, drink đồ uống

//
//