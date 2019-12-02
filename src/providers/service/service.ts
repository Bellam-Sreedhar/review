import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConstantsProvider } from '../constants/constants';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
@Injectable()
export class ServiceProvider {
  constructor(
    public http: Http,
    public constants: ConstantsProvider,
    public toastCtrl: ToastController
  ) { }
  postWithOutSessionId(URL, body) {
    var payload = {}
    payload['payload'] = body;
    var headers = new Headers();
    headers.append("affinity-url", this.constants.AFFINITY_URL);
    headers.append('Content-Type', 'application/json');
    var options = new RequestOptions();
    options.headers = headers;
    return this.http.post(URL, payload, options).map(data => {
      return data.json();
    })
  }
  postWithSessionId(URL, body) {
    var payload = {};
    var sessionId = localStorage.getItem("sessionId");
    payload['payload'] = body;
    var headers = new Headers();
    headers.append("affinity-url", this.constants.AFFINITY_URL);
    headers.append('Content-Type', 'application/json');
    headers.append('qspSessionId', sessionId);
    var options = new RequestOptions();
    options.headers = headers;
    return this.http.post(URL, payload, options).map(data => {
      return data.json();
    });
  }
  presentToast(msg, duration) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration
    })
    toast.present();
  }
}