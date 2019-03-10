class AdminExample {
    constructor(name, email, password, type = 'admin') {
        this._name = name;
        this._email = email;
        this._password = password;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password.replace(/./gi, "*");
    }
    get type() {
        return this._type;
    }
    ;
    getInfo() {
        return `name = ${this.name}; email = ${this.email}; password = ${this.password}; type = ${this.type};`;
    }
}
console.log('Task4 / Admin interface');
console.log('creating admin as : var adminExample : Admin = new AdminExample(\'Igor\',\'test@test.com\',\'password\')');
var adminExample = new AdminExample('Igor', 'test@test.com', 'password');
console.log(adminExample);
console.log(adminExample.getInfo());
console.log('using inline initialization of Admin');
var admin = {
    name: 'Igor',
    email: 'test@test.com',
    password: 'password',
    type: 'Admin'
};
console.log(admin);
