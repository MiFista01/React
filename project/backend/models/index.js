import sequelize from "sequelize";
import bcrypt from "bcrypt";
import admin from "./user.js"
import applications from "./applications.js";

const models = {};
models.admin = admin;
models.applications = applications;
models.sequelize = sequelize
models.Op = sequelize.Op
models.bcrypt = bcrypt

export default models 