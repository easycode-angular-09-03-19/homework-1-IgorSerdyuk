interface Admin {
    name: string;
    email: string;
    password: string;
    type?: string;
}

class AdminExample implements Admin {
    private _name: string;
    private _email: string;
    private _password: string;
    private _type: string;

    public constructor(name: string, email: string, password: string, type: string = 'admin') {
        this._name = name;
        this._email = email;
        this._password = password;
        this._type = type;
    }

    public get name() {
        return this._name;
    }

    public get email() {
        return this._email;
    }

    public get password() {
        return this._password.replace(/./gi, "*");
    }

    public get type() {
        return this._type;
    };

    public function: string; getInfo() {
        return `name = ${this.name}; email = ${this.email}; password = ${this.password}; type = ${this.type};`;
    }
}

console.log('Task4 / Admin interface');
console.log('creating admin as : var adminExample : Admin = new AdminExample(\'Igor\',\'test@test.com\',\'password\')')
var adminExample: Admin = new AdminExample('Igor', 'test@test.com', 'password');
console.log(adminExample);
console.log((adminExample as AdminExample).getInfo())
console.log('using inline initialization of Admin');
var admin: Admin = {
    name: 'Igor',
    email: 'test@test.com',
    password: 'password',
    type: 'Admin'
}
console.log(admin);