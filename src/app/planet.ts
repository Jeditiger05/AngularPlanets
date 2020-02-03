export class Planet {
    name: string;
    moons: number;
    distanceFromSun: number;

    constructor(name: string, moons: number, distanceFromSun: number){
        this.name = name;
        this.moons = moons;
        this.distanceFromSun = distanceFromSun;
    }
}
