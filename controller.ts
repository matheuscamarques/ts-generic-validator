import { User } from "./model";
import validador from "./validador"

class Controller {

    public static createUser() {
        let req = {
            body : {
                email: "matheus@gmail.com",
                cpf: "10716274906"
            }
        }

        let request = validador(req.body, User.keys(), User.getMessages(), User.validates());

        if(!request.getValid()) {
            console.log(request.getMessage());
            return;
        }
        // code continues here
        console.log("user created")
    }


}


Controller.createUser();