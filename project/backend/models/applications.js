import db from '../connection/database.js'
import {DataTypes, Model} from 'sequelize'

class Applications extends Model{}
Applications.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    education: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN
    }
},
{
    sequelize:db,
    modelName: 'applications'
})
export default Applications

// references:{
//     model: "games",
//     key:"id"
// }