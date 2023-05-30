import db from '../connection/database.js'
import {DataTypes, Model} from 'sequelize'
class Department extends Model{}
Department.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize:db,
    modelName: 'department'
})
export default Department

// references:{
//     model: "games",
//     key:"id"
// }