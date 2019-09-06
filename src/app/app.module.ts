import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/actionsheet/actionsheet';
import { AlertPage } from '../pages/alerts/alert/alert';
import { CheckboxPage } from '../pages/alerts/checkbox/checkbox';
import { ConfirmPage } from '../pages/alerts/confirm/confirm';
import { PromptPage } from '../pages/alerts/prompt/prompt';
import { RadioPage } from '../pages/alerts/radio/radio';
import { ButtonPage } from '../pages/buttons/button/button';
import { OutlinePage } from '../pages/buttons/outline/outline';
import { ClearPage } from '../pages/buttons/clear/clear';
import { RoundPage } from '../pages/buttons/round/round';
import { BlockPage } from '../pages/buttons/block/block';
import { FullPage } from '../pages/buttons/full/full';
import { SizesPage } from '../pages/buttons/sizes/sizes';
import { IconsPage } from '../pages/buttons/icons/icons';
import { ComponentsPage } from '../pages/buttons/components/components';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    CheckboxPage,
    ConfirmPage,
    PromptPage,
    RadioPage,
    ButtonPage,
    OutlinePage,
    ClearPage,
    RoundPage,
    BlockPage,
    FullPage,
    SizesPage,
    IconsPage,
    ComponentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    CheckboxPage,
    ConfirmPage,
    PromptPage,
    RadioPage,
    ButtonPage,
    OutlinePage,
    ClearPage,
    RoundPage,
    BlockPage,
    FullPage,
    SizesPage,
    IconsPage,
    ComponentsPage
  ],
  providers: []
})
export class AppModule {}
