import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

import {UsersModalPageModule} from '../users-modal/users-modal.module';
import {ModalController} from '@ionic/angular';
import {UsersModalPage} from "../users-modal/users-modal.page";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public draws: any;
    public currentUsers: any;

    constructor(public db: AngularFireDatabase, public modalController: ModalController) {
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

    async openModal(draw) {
        for (let i = 0; i < this.draws.length; i++) {
            if (this.draws[i].hashtag === draw.hashtag) {
                this.currentUsers = this.draws[i].usersInRaffle;
                console.log(this.currentUsers);
            }
        }
        const modal = await this.modalController.create({
            component: UsersModalPage,
            componentProps: {
                user: this.currentUsers
            }
        });
        return await modal.present();
    }
}
