import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'prompt.html'
})
export class PromptPage {

  constructor(public alertCtrl: AlertController) { }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked', data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data);
          }
        }
      ]
    });
    prompt.present();
  }

}
