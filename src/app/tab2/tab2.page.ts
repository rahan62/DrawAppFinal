import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public name = '';
  public surname = '';
  public maxContestant: any;
  public finalDate: any;
  public url = '';
  public reward = '';
  constructor(public db: AngularFireDatabase) {

  }
  // saveDraw() {
  //   this.draw = {
  //     ''
  //   }
  // }

}
