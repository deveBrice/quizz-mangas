import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionComponent } from '../option/option.component';



@Component ({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {}

         ngOnInit() {

         }


        async openModalOptionPage() {
            const modal = await this.modalCtrl.create({
                component: OptionComponent,
                swipeToClose: true,
                presentingElement: await this.modalCtrl.getTop()
              })
            return await modal.present();
          }
}