import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public draws: any;
  constructor(public db: AngularFireDatabase) {
    this.db.list('draws/').snapshotChanges().subscribe(items => {
      this.draws = items.map(item => {
       return item.payload.val();
      });
    });
  }

}
