type Constructor = { new (...args: any[]): any };

function addEdad( edad: number ) {
    return function <T extends Constructor >( constructor: T ) {
        return class extends constructor {
            edad = edad;
            
            setEdad( edad:number  ) {
                this.edad = edad;
            }

            toString() {
                return JSON.stringify( this );
            }
        }
    }
}

function printToConsole( constructor: Function ) {
    console.log( constructor );
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
    if ( print ) {        
        return printToConsole;
    } else {
        return () => {}
    }
}

const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId() {

    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {

        const originalMethod = descriptor.value; 

        descriptor.value = ( id: number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error( 'El id del pokemon debe estar entre 1 y 800' );
            } else {
                return originalMethod( id );

            }
        };
    }
}


function readonly( isReadonly: boolean = true ): Function {
    return function( target: any, propertyKey: string ) {

        const descriptor: PropertyDescriptor = {
            // get() {
            //     console.log(this);
            //     return 'Fernando';
            // },
            set( this, val ) {
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isReadonly,
                    enumerable: false
                });
            }
        }

        return descriptor;
    }
}


@addEdad(40)
@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

    @readonly( false )
    public publicApi: string = 'https//pokeapi.co';

    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonDB( id: number ) {
        console.log( `Pokemon guardado en DB ${ id }` );
    }

}
