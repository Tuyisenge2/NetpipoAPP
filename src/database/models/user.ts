import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
import { UserCreationAttributes, UserModelAttributes } from "../../types/model";
import database_models from "../config/db.config";

export class User extends Model<UserModelAttributes, UserCreationAttributes> {
  public id!: string;
  public name!: string;
  public position!: string;
  public salary!: Number;
  public email!: string;
  public role!: string;

  public static associate(models: {
    role: typeof database_models.role;
  }) {
    User.belongsTo(models.role, { as: "Roles", foreignKey: "role" });
  }
}

const user_model = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        references: {
          model: "roles",
          key: "id",
        },
      }
    },
    {
      sequelize,
      tableName: "users",
    }
  );

  return User;
};
export default user_model;
