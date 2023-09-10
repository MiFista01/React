import Sequelize from 'sequelize';

const sequelize = new Sequelize("hairdresser","root","",{host: "localhost", dialect:"mysql"})
export default sequelize 