import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { "email": "", "password": "" }
  constructor(
    public navCtrl: NavController,
    public constants: ConstantsProvider,
    public service: ServiceProvider,
    public events: Events
  ) {
  }
  loginClick() { 
    var URL = this.constants.URL + this.constants.AUTHENTICATE_URL
    var body = {}
    body["email"] = this.user.email;
    body["password"] = this.user.password;
    this.service.postWithOutSessionId(URL, body).subscribe((data) => {
      console.log("Login Status");
      console.log(data.payload);
        if (data.status = "SUCCESS" && data.payload.code!=106) {
        localStorage.setItem("sessionId", encodeURI(data.payload.sessionToken));
        this.events.publish("categoriesList");
        this.events.publish("userInfo");
        this.navCtrl.setRoot(HomePage);
      }
    });
  }
}
