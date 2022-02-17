import { cpf, regexp_email } from "./utils";

export class User {
    id: number;
    email: string;
    cpf: string;

    static getMessages() {
        return {
            email: 'Email is required or invalid',
            cpf: 'CPF is required or invalid'
        }
    }

    static keys() {
        return ['email', 'cpf']
    }

    static validates(){
        return {
            email: (email: string) => regexp_email.test(String(email).toLowerCase()),
            cpf: cpf
        }
    }
}