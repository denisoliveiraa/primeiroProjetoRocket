import {response, Router} from 'express'
import { createSpecificationController } from '../modules/cars/userCases/createSpecification';



const specificantionRoutes = Router();


specificantionRoutes.post("/", (request, response) => {
        return createSpecificationController.handle(request,response)
})

export { specificantionRoutes }