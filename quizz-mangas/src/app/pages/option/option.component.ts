import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component ({
    selector:'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss']
})

export class OptionComponent implements OnInit {
    
    constructor(private modalctrl: ModalController) {}

    ngOnInit() {

    }

      

   async dismissModal(){
       await this.modalctrl.dismiss();
    }
}