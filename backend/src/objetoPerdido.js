
class ObjetoPerdido {
    
    
    constructor(fecha, descripcion, lugar, perdido){
        this.fechaIngresado = fecha;
        this.descripcion = descripcion;
        this.lugar = lugar;
        this.estado = perdido;
        this.archivado = false;
    }
}

module.exports = ObjetoPerdido;