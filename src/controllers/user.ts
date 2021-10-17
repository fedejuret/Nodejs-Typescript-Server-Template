import { Request, Response } from "express";
import Validators from "../helpers/validators";

const store = (req: Request, res: Response) => {

    let response = {
        status: 'success',
        code: 200
    };

    try {
        Validators.validateRequiredRequest(req, 'username');
        Validators.validateRequiredRequest(req, 'password');
    } catch (error: any) {
        response.status = error;
    }

    res.send(response);
}

export default {
    store
}