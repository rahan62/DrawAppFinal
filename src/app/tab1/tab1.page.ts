import {Component} from '@angular/core';
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

    helpAlert() {
        alert('Çekilişlere katılmak için verilen instagram linkine giriş yapıp yorum olarak "#" ile belirtilen ' +
            'hashtag i fotoğrafın altına yazmalısınız. Belirtilen hashtag yazıldığında instagram kullanıcı adınız ile ' +
            'otomatik olarak çekişile katılmış sayılırsınız. ');
    }
}
