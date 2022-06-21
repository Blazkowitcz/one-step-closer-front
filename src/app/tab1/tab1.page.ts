import { Component, OnInit } from '@angular/core';
import { Exercice } from '../models/exercice.model';
import { ExerciceService } from './exercice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  exercices: Exercice[] = [];

  constructor(private exerciceService: ExerciceService) {}

  /**
   * Get Exercice List
   */
  async getExercices(){
    this.exercices = await this.exerciceService.getExercices();
  }

  /**
   * Increment repetition of Exercice
   * @param id 
   */
  incrementExercice(id: String){

  }

  /**
   * Decrement repetition of Exercice
   * @param id 
   */
  decrementExercice(id: String){

  }

  async createExercice(){
    await this.exerciceService.createExercice({name: "Pompes", repetition: 1});
  }

  /**
   * Init
   */
  ngOnInit(){
    this.createExercice();
    this.getExercices();
  }

}
