import express from 'express'

import {getAll,
    getById,
    Create,
    Update,
    Delete
} from '../controllers/departmentController.js'

const departmentRouter = express.Router()

departmentRouter.get('/', getAll );
departmentRouter.get('/:id', getById );
departmentRouter.post('/', Create );
departmentRouter.patch('/:id', Update );
departmentRouter.delete('/:id', Delete)

export default departmentRouter