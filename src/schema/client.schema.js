export default class ClientDTO{

    codigo;
    nombre;
    correo;
    telefono;
    numero;
    ciudad;
    direccion;
    fecha;
    estado;
    acciones;

    constructor(data) {
        this.codigo = data.codigo;
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.telefono = data.telefono;
        this.numero = data.numero;
        this.ciudad = data.ciudad;
        this.direccion = data.direccion;
        this.fecha = data.fecha;
        this.estado = data.estado;
        this.acciones = data.acciones;
    }
}