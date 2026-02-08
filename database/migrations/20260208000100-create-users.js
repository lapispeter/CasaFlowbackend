// migrations/20260208000100-create-users.js
import { DataTypes } from 'sequelize'

async function up({ context: QueryInterface }) {
  await QueryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // 0=user, 1=admin
    },

    lastActivityAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },

    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    verificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    verificationTokenExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    passwordResetExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  })
}

async function down({ context: QueryInterface }) {
  await QueryInterface.dropTable('users')
}

export { up, down }
