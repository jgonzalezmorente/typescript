(() => {

    class Avenger {

        static avgAge: number = 35;
        static getAvgAge() {
            return Avenger.name;
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        public bio() {
            return `${ this.name } (${ this.team })`;
        }
    }


    const antman: Avenger = new Avenger( 'Antman', 'Capitán!', 'Scott Lang');
    // console.log( antman );

    // console.log( antman.bio() );
    // console.log( Avenger.getAvgAge() );

})();