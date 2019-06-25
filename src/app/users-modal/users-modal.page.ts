import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {createConsoleLogger} from "@angular-devkit/core/node";

@Component({
    selector: 'app-users-modal',
    templateUrl: './users-modal.page.html',
    styleUrls: ['./users-modal.page.scss'],
})
export class UsersModalPage implements OnInit {

    public modalUsers: any;

    constructor(private modalController: ModalController,
                private navParams: NavParams) {
        console.log(this.navParams.data);
    }

    ngOnInit() {
        this.modalUsers = Array.of(this.navParams.data.user);
        console.log(this.modalUsers['0']);
        this.modalUsers = this.modalUsers['0'];
    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }
}
