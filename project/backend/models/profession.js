import db from '../connection/database.js'
import {DataTypes, Model} from 'sequelize'
import Department from './department.js'

class Profession extends Model{}
Profession.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    education: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    poster: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        // references:{
        //     model: "departments",
        //     key:"id"
        // }
    }
},
{
    sequelize:db,
    modelName: 'professions'
})
Profession.belongsTo(Department,{foreignKey:'department_id', as:'department'})
Department.hasMany(Profession,{as:"profession", foreignKey:"department_id"})
export default Profession

// references:{
//     model: "games",
//     key:"id"
// }