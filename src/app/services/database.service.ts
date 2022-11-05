import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Material } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  //TODO: Implement material selection
  // by calling selectedMaterial = new Behaviorsubject(initalMaterial)
  selectedMaterial: BehaviorSubject<Material | null> | null = null;
  materials$: Observable<Material[]> | null = null;

  constructor(private firestore: Firestore) {
    let materialsCollection = collection(this.firestore, 'materials')
    //@ts-ignore
    this.materials$ = collectionData(materialsCollection);
    this.materials$?.subscribe((materials: Material[]) => {
      console.log(materials)
      // @ts-ignore
        this.selectedMaterial = new BehaviorSubject(materials[0]);
    })
    
    this.selectedMaterial?.subscribe(material => {
      console.log(`selected ${material?.name}`)
    })
  }
}
