import express from 'express'
import {
    Create,
    Delete,
    Update,
    changeStatus,
    getAll,
    LogIn,
    LogOut} from "../controllers/admin.js"
import verifyUser from "../middleware/verifyUser.js"
const adminRouter = express.Router()

adminRouter.get('/',verifyUser, getAll );
adminRouter.post('/status', changeStatus );
adminRouter.post('/login', LogIn);
adminRouter.post('/logout', LogOut );
adminRouter.post('/', Create );
adminRouter.patch('/:id', Update );
adminRouter.delete('/:id', Delete)

export default adminRouter