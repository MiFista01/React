import express from 'express'

import {getAll,
    getById,
    getByDepartment,
    Create,
    Update,
    Delete
} from '../controllers/professionController.js'

const professionRouter = express.Router()

professionRouter.get('/', getAll );
professionRouter.get('/:id', getById );
professionRouter.get('/department/:id', getByDepartment );
professionRouter.post('/', Create );
professionRouter.patch('/:id', Update );
professionRouter.delete('/:id', Delete)

export default professionRouter 