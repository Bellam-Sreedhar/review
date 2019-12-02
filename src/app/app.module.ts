import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SearchResultPage } from '../pages/search-result/search-result';
import { ListPage } from '../pages/list/list';
import { AlbumListPage } from '../pages/album-list/album-list';
import { ArticleListPage } from '../pages/article-list/article-list';
import { PollListPage } from '../pages/poll-list/poll-list';
import { QuestionAndAnsewersListPage } from '../pages/question-and-ansewers-list/question-and-ansewers-list';
import { StaticpagePage } from '../pages/staticpage/staticpage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { ServiceProvider } from '../providers/service/service';
import { ConstantsProvider } from '../providers/constants/constants';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchResultPage,
    ListPage,
    AlbumListPage,
    StaticpagePage,
    ArticleListPage,
   // FontAwesomeModule,
    PollListPage,
    QuestionAndAnsewersListPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchResultPage,
    StaticpagePage,
    ListPage,
    AlbumListPage,
    ArticleListPage,
    PollListPage,
    QuestionAndAnsewersListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     ServiceProvider,
    ConstantsProvider,
    Network
  ]
})
export class AppModule {}
