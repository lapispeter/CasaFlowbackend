// migrations/20260208000300-create-meter-readings.js
import { DataTypes } from 'sequelize'

async function up({ context: QueryInterface }) {
  await QueryInterface.createTable('meterReading', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    meterType: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    reading: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    notifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
  await QueryInterface.dropTable('meterReading')
}

export { up, down }
