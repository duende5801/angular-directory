import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private studentData: Student[] = [
    {
      fN: 'David',
      lN: 'Abdallah',
      sN: 'DaveDaAverageDude',
      nN: 'Dave',
      hob: 'Work'
    },
    {
      fN: "Zach",
      lN: "Davis",
      sN: "zdavis",
      nN: "Wynan",
      hob: "games"
    },
    {
      fN: 'Carson',
      lN: 'Hubber',
      sN: 'somethingCarson',
      nN: 'Cars',
      hob: 'Talking'
    },
    {
      fN: 'Bisola',
      lN: 'Ajwoola',
      sN: 'Bisola',
      nN: 'Bisola',
      hob: 'i dont know'
    },
    {
      fN: 'Carter',
      lN: 'Galvez',
      sN: 'Carter209',
      nN: 'Carter',
      hob: 'something else'
    },
    {
      fN: 'Deon',
      lN: 'Simmons Jr.',
      sN: 'Deon',
      nN: 'N/A',
      hob: 'Reading Comics'
    },
    {
      fN: 'Joseangel',
      lN:'Pantoja',
      sN:'Angel',
      nN:'Angel',
      hob:'Hiking'
    }
  ];
  constructor() { }

  getStudent(): Student[]{
    return this.studentData;
  }
}
