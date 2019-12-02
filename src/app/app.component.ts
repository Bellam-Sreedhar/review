import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { ConstantsProvider } from '../providers/constants/constants';
import { ServiceProvider } from '../providers/service/service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage: any
  tagObj:string="";
  categoriesList = [];
  userDetails = [];
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public constants: ConstantsProvider,
    public service: ServiceProvider,
    public events: Events,
    public network: Network
  ) {
    this.networkCheck();
    this.initializeApp();
    this.getCategoryList();
    this.getUserInfo();
    this.events.subscribe("categoriesList", () => {
      this.getCategoryList();
    })
    this.events.subscribe("userInfo", () => {
      this.getUserInfo();
    })
    this.loginCheck();
    this.sessionIdExpireCheck();
  }
  sessionIdExpireCheck() {
    var URL = this.constants.URL + this.constants.ISUSERLOGGEDIN_URL;
    var body = {};
    this.service.postWithSessionId(URL, body).subscribe((data:any) => {
      console.log("session Token Check");
      if (data.payload == false) {
        localStorage.clear();
        this.rootPage = LoginPage;
      }
      console.log(data);
    })
  }
  loginCheck() {
    if (localStorage.getItem("sessionId")) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }
  }
  homeClick(){
    this.nav.setRoot(HomePage);
  }
  getCategoryList() {
    var URL = this.constants.URL + this.constants.CATEGORYLIST_URL;
    var body = {};
    this.service.postWithSessionId(URL, body).subscribe((data:any) => {
      this.categoriesList =data.payload;
      console.log(data.payload);
    })
  }
  networkCheck() {
    this.network.onDisconnect().subscribe((data) => {
      this.service.presentToast("Please Check Your Internet Connection", 2000);
      console.log('network was disconnected');
      console.log(data);
    });
    this.network.onConnect().subscribe(data => {
      this.service.presentToast("Internet Connection Established", 2000);
      console.log('network connected');
      console.log(data)
    });
  }
  getUserInfo() {
    var URL = this.constants.URL + this.constants.GETUSERDETAILS_URL;
    var body = {};
    this.service.postWithSessionId(URL, body).subscribe((data) => {
      this.userDetails = data.payload;
      console.log("userInfo");
      console.log(data.payload);
    })
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide(); 
    });
  }
  categoryClick(tagObj,categoryObj) {
   var categoryArray=[];
   categoryArray["tagObj"]=tagObj;
   categoryArray["categoryObj"]=categoryObj;
    if(categoryObj.tags==null){
   this.nav.setRoot(ListPage, {"category": categoryArray});
  }else{
    categoryObj.clickable=!categoryObj.clickable;
  }
  if(tagObj!=""){
    this.nav.setRoot(ListPage, {"category": categoryArray});
  }
  }
  logoutClick() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}