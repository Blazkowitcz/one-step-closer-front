import { Injectable } from '@angular/core';
import { Exercice } from '../models/exercice.model';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class ExerciceService {

    constructor(private storage: Storage){}

    async getExercices(): Promise<Exercice[]> {
        let exercices: Exercice[] = []; 
        return this.storage.get('exercices').then((value) => {
            if (value !== null && value !== undefined) {
                exercices = <Exercice[]>JSON.parse(value);
            }
            return exercices;
        });
    }

    async saveExercices(exercices: Exercice[]): Promise<Boolean> {
        this.storage.set('exercices', JSON.stringify(exercices));
        return true;
    }

    async createExercice(exercice: Exercice) {
        let exercices: Exercice[] = await this.getExercices();
        exercices.push({name: "Pompes", repetition: 1});
        await this.saveExercices(exercices);
        return;
    }
}
