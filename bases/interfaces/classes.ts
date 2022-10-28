(() => {

    interface XMen {
        name?: string;
        realName?: string;
        mutanPower( id: string ): string;
    }

    interface Human {
        age?: number;
    }



    class Mutant implements XMen, Human {

        public age?: number;
        public name?: string ;
        public realName?: string;
        
        mutanPower( id: string ): string {
            return this.name + ' ' + this.realName;
        }

    }

})();