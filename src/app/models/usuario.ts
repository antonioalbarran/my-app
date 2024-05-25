export class usuario {
    id: number;
    username: string;
    nombre: string;
    apellidos: string;
    email: string;
    password: string;
    roles: string[];
    sucursales: string[];
    nomina: string;
    jsonToken: string;

    constructor(id=0, username="",nombre="", apellidos="", email="" , password="", roles=[],sucursales=[], nomina="", jsonToken="") {
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.nomina = nomina;
        this.jsonToken = jsonToken;
        this.sucursales = sucursales;
    }
}
