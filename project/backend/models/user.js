import db from '../connection/database.js'
import {DataTypes, Model} from 'sequelize'
class User extends Model{}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},
{
    sequelize:db,
    modelName: 'user'
})
export default User 

// references:{
//     model: "games",
//     key:"id"
// }