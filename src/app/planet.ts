export class Planet {
    name: string;
    moons: number;
    distanceFromSun: number;

    constructor(name: string, moons: number, distance: number){
        this.name = name;
        this.moons = moons;
        this.distanceFromSun = distance;
    }
}
