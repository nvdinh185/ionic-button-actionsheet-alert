import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../actionsheet/actionsheet';
import { AlertPage } from '../alerts/alert/alert';
import { CheckboxPage } from '../alerts/checkbox/checkbox';
import { ConfirmPage } from '../alerts/confirm/confirm';
import { PromptPage } from '../alerts/prompt/prompt';
import { RadioPage } from '../alerts/radio/radio';
import { ButtonPage } from '../buttons/button/button';
import { OutlinePage } from '../buttons/outline/outline';
import { ClearPage } from '../buttons/clear/clear';
import { RoundPage } from '../buttons/round/round';
import { BlockPage } from '../buttons/block/block';
import { FullPage } from '../buttons/full/full';
import { SizesPage } from '../buttons/sizes/sizes';
import { IconsPage } from '../buttons/icons/icons';
import { ComponentsPage } from '../buttons/components/components';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }
  actionSheet() {
    this.navCtrl.push(ActionSheetPage);
  }

  alert() {
    this.navCtrl.push(AlertPage);
  }

  checkbox() {
    this.navCtrl.push(CheckboxPage);
  }

  confirm() {
    this.navCtrl.push(ConfirmPage);
  }

  prompt() {
    this.navCtrl.push(PromptPage);
  }

  radio() {
    this.navCtrl.push(RadioPage);
  }

  button() {
    this.navCtrl.push(ButtonPage);
  }

  outline() {
    this.navCtrl.push(OutlinePage);
  }

  clear() {
    this.navCtrl.push(ClearPage);
  }

  round() {
    this.navCtrl.push(RoundPage);
  }

  block() {
    this.navCtrl.push(BlockPage);
  }

  full() {
    this.navCtrl.push(FullPage);
  }

  sizes() {
    this.navCtrl.push(SizesPage);
  }

  icons() {
    this.navCtrl.push(IconsPage);
  }

  components() {
    this.navCtrl.push(ComponentsPage);
  }
}
