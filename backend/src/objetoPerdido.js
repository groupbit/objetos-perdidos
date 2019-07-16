
class ObjetoPerdido {
    
    
    constructor(fecha, descripcion, lugar, perdido){
        this.fechaIngresado = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
        this.descripcion = descripcion;
        this.lugar = lugar;
        this.estado = perdido ? "Perdido" : "Encontrado";
    }
}

module.exports = ObjetoPerdido;