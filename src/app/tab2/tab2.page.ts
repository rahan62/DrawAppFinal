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
  public draw: any;
  public hashtag = '';
  public drawName = '';
  public postURL = '';
  constructor(public db: AngularFireDatabase) {

  }
  saveDraw() {
    this.draw = {
      name: this.name,
      surname: this.surname,
      maxContestant: this.maxContestant,
      finalDate: this.finalDate,
      url: this.url,
      reward: this.reward,
      hashtag: this.hashtag,
      drawName: this.drawName,
      postURL: this.postURL
    };
    this.db.list('draws').push(this.draw);
    alert('Çekiliş Başarıyla oluşturuldu');
  }

}
