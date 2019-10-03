

class Usuarios{



    constructor(){
        this.personas = [];
    }

    agregarPersona(id, nombre, sala){
        let persona = {
            id, 
            nombre,
            sala
        };

        this.personas.push(persona);

        return this.personas;
    }

    //obtener persona por ID
    getPersona(id){
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0];
        return persona;
    }
    getPersonas(){
        return this.personas;
    }
    //traer personas por salas
    getPersonasPorSala(sala){
        //falta xd
        let personasEnSala = this.personas.filter(persona=>{
            return persona.sala === sala
        });

        return personasEnSala;
    }
    //quitar persona
    borrarPersona(id){
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona=>{
            return persona.id != id
        });
        return personaBorrada;
    }

}
module.exports = {
    Usuarios
}