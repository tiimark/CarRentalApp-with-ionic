import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from '../../node_modules/angular2-text-mask/dist/angular2TextMask';

import { Database } from '../providers/database';
import { LocalStorage } from '../providers/local-storage';
import { Car } from '../providers/car';

import { Login } from '../pages/login/login';
import { CreateAccount } from '../pages/create-account/create-account';
import { Home } from '../pages/home/home';
import { Localization } from '../pages/localization/localization';
import { Profile } from '../pages/profile/profile';
import { EditProfile } from '../pages/edit-profile/edit-profile';
import { Category } from '../pages/category/category';
import { CarList } from '../pages/car-list/car-list';
import { CarDetails } from '../pages/car-details/car-details';
import { BookCar } from '../pages/book-car/book-car';

@NgModule({
  declarations: [
    MyApp,
    Login,
    CreateAccount,
    Home,
    Localization,
    Profile,
    EditProfile,
    Category,
    CarList,
    CarDetails,
    BookCar
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    CreateAccount,
    Home,
    Localization,
    Profile,
    EditProfile,
    Category,
    CarList,
    CarDetails,
    BookCar
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Database, LocalStorage, Car]
})
export class AppModule {}
