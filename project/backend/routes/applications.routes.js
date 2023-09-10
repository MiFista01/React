import express from 'express'

import {Create} from '../controllers/applications.js'

const applicationsRouter = express.Router()

applicationsRouter.post('/', Create );

export default applicationsRouter 