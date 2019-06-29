

class Human {
    weight :number;
    height:number;


    constructor(age: number, high: number) {
        this.weight = age;
        this.height = high;
    }
}

class Deputy extends Human{
    name:string;
    surname:string;
    age:number;
    isHabarnik:boolean;
    habarCount:number;

    constructor(age: number, high: number, name: string, surname: string, isHabarnik: boolean, habarCount: number) {
        super(age, high);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isHabarnik = isHabarnik;
        this.habarCount = habarCount;
    }
   giveHabar(habar:number){
        if(!this.isHabarnik)console.log("fuf ")
       if(habar>this.habarCount)console.log("thing about it")
   }
}

class Fraction {
    deutyArr:Array<Deputy>=[];
    constructor(){
    }

    addDeputy(deputy:Deputy){
        this.deutyArr.push(deputy)}
     deleteDeputy(name:string){
        this.deutyArr.pop();
     }
    deleteHabarnik(){
        this.deutyArr.map(deputy=>!deputy.isHabarnik)
    }
   getPig ()  {
    let [deputy]=this.deutyArr.sort()
    }


}
class Rada{
    // fractions:

    addFraction(){};
    deleteFraction(){};
    showFraction(){};
    showAllPigs(){};
    showPigsFromFraction(){};
    showPigsFromRada(){};


}

