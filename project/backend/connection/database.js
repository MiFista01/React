import Sequelize from 'sequelize';

const sequelize = new Sequelize("school","root","",{host: "localhost", dialect:"mysql"})
export default sequelize 