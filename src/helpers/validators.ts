import { Request } from "express";

class Validators {

    public static validateRequiredRequest(request: Request, requirement: String) {

        try {

            if (!request.body.contains(requirement)) throw new Error(`Parameter ${requirement} are required`);

        } catch (error) {
            console.error(error);
        }

    }

}
export default Validators;