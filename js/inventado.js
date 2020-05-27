
class Empresa {
//Creo el constructor de la empresa
    constructor(nombre, nif, direccion, localidad) {
        this.nombre = nombre;
        this.nif = nif;
        this.direccion = direccion;
        this.localidad=  localidad;

    }
        //primer metodo dentro de la clase EMPRESA
        //METODO
        muestradatosdeempresa() {
            console.log(` La empresa se llama ${this.nombre}, su NIF es ${this.nif} con direccion en ${this.direccion} , ${this.localidad} `);
        }

}

//heredo clase de Empresa
//Extens extiende la clase Empresa y añade lo que le pida

class ActividadEmpresarial extends Empresa {
    //Este constructor lo ordeno como yo quiera//Recomendable seguir un patron
    constructor(nombre, nif, direccion, localidad, actividadempresarial) { //esto es lo que quiero pedirle
        super(nombre, nif, direccion, localidad); //Esto es lo que hereda de class EMPRESA
        this.actividadempresarial = actividadempresarial;

    }
    //Metodo heredando EMPRESA
    dimeactividadempresarial() {
        console.log(` La empresa se llama ${this.nombre}, su NIF es ${this.nif} y su actividad es ${this.actividadempresarial} `);
    };

}

//heredo clase de la clase heredada (ActividadEmpresarial)!! 

class NumeroTrabajadores extends ActividadEmpresarial {
    //Constructor
    constructor(nombre, nif, direccion, localidad, actividadempresarial, trabajadores) { //esto es lo que quiero pedirle //he cambiado el orden de trabajador y actividadempresarial
        super(nombre, nif, direccion, localidad, actividadempresarial); //Esto es lo que hereda de class EMPRESA
        this.trabajadores = trabajadores;

    }
    //Metodo heredado de ActividadEmpresarial
    dimecuantostrabajadores() {
        console.log(` La empresa se llama ${this.nombre}, su NIF es ${this.nif} y consta de ${this.trabajadores} trabajadores `);
    };

}

class Codigopostal extends Empresa {
    //Constructor
    constructor(nombre, nif, direccion, localidad, codigopostal) { //esto es lo que quiero pedirle //he cambiado el orden de trabajador y actividadempresarial
        super(nombre, nif, direccion, localidad, ); //Esto es lo que hereda de class EMPRESA
        this.codigopostal = codigopostal;

    }
    //Metodo heredado de ActividadEmpresarial
    muestracodigopostal() {
        console.log(`La empresa se llama ${this.nombre}, su NIF es ${this.nif} con direccion en ${this.direccion} , ${this.localidad}, y codigo postal ${this.codigopostal} `);
    };

}
//Instancias (instanciar de empresa)
var empresa1 = new Empresa("El Corte Ingles S.A", "B12345678", "Av.Alexandre Rosselló", "Palma","07120",);
var empresa2 = new Empresa("Media Markt", "B78451278", "Calle Ocimax, 38", "Palma", "07001",);
var empresa3 = new ActividadEmpresarial("Alcampo", "B98653298", "Calle falsa,123", "Marratxi","07451", "alimentacion");
var empresa4 = new ActividadEmpresarial("Inventada", "B98659865", "Plaza Eapaña", "Inca","07150", "periodismo");
var empresa5 = new NumeroTrabajadores("InformaticaPC", "B12312312", "Alcazar, 57", "07610", "Marratxi", "Informatica", 5000);
var empresa6 = new NumeroTrabajadores("LimpezasExpress", "B74174145", "Carrer Jesus, 9","07010", "Palma","Limpieza", 50);
var empresa7 = new Codigopostal("Telepizza", "B78787455", "Joan Alcover", "Palma", "07006", "restaurante", 100);
var empresa8 = new Codigopostal("Cristaleria Cristal", "B45454145", "AV.La playa", "Llucmajor", "07650", "Cristaleria", 50);







