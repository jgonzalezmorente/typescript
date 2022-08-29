(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verda";
    const volcanNegro: string = `Héroe: Volcán Negro`;

    console.log(`I'm ${ batman }`);
    console.log( batman.toUpperCase() );
    console.log( batman[10]?.toUpperCase() || 'No está presente' );

})();