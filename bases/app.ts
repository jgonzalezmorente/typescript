// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ) : void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

conducirBatimovil( batimovil );

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir? : boolean;
  comer? : boolean;
  llorar? : boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false,
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente función

interface CiudadGoticaFn {
  ( ciudadanos : string[] ): number
}


const ciudadGotica: CiudadGoticaFn = ( ciudadanos ) => {  
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface PersonaInterface {
  edad: number
  estadoCivil: string
  nombre: string
  sexo: string
  imprimirBio(): void
}

class Persona implements PersonaInterface {
    
  public edad: number = 40;
  public estadoCivil: string = 'soltero';
  public nombre: string = 'José Antonio';
  public sexo: string = 'Masculino';
  
  public imprimirBio() {    
  }

}
