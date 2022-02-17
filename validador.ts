

interface IDicionary<T> {
    [key: string]: T;
}

interface Callable<U, R> {
    (arg: U): R;
}

class Validador {
    private message = '';
    private valid = true;


    public validate(o: Object, keys: string[], message: IDicionary<string>, callables: IDicionary<Callable<string, boolean>>) {
        for (const key of keys) {
            if (!o[key]) {
                this.message = message[key];
                this.valid = false;
                break;
            }
            if (callables[key]) {
                const result = callables[key](o[key]);
                if (!result) {
                    this.message = message[key];
                    this.valid = false;
                    break;
                }
            }

        }
        return this
    }

    static init() {
        return new Validador();
    }
    public getMessage(): string {
        return this.message;
    }

    public getValid(): boolean {
        return this.valid
    }
}


// dados Object 
// array<string>
// 


export default function validador(o: Object, keys: string[], message: IDicionary<string> = {}, callables: IDicionary<Callable<string, boolean>> = {}) {
    return Validador.init().validate(o, keys, message, callables);
}

// Testes
// const obj = {
//     nome: 'Matheus',
//     email: 'matheus@gmail.com',
//     cpf: '10716274906'

// }
// const keys = ['nome', 'email', 'cpf']
// const message: IDicionary<string> = {
//     nome: 'Nome é obrigatório',
//     email: 'Email é obrigatório ou inválido',
//     cpf: 'CPF é obrigatório ou inválido'
// }

// const fnValid: IDicionary<Callable<string, boolean>> = {
//     nome: (nome: string) => {
//         return nome.length > 3;
//     },
//     email: (email: string) => {
//         return regexp_email.test(String(email).toLowerCase());
//     },
//     cpf: cpf
// }

// const val = validador(obj, keys, message, fnValid)
// console.log(val.getMessage(), val.getValid())