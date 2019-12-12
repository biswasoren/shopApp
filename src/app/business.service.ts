import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class Service {

  uri = 'http://localhost:4000/shops';
  versionuri = '/getversion';

  constructor(private http: HttpClient, private cs: CookieService) { }

  login(userName, password) {
    console.log(userName, password);
    const obj = {
      userName: userName,
      password: password,
    };
    this.http.post(`${this.uri}/login`, obj)
        .subscribe(res => {
          console.log(res);
          if (Object.values(res) && Object.values(res).length > 0 && Object.values(res)[0].password === password) {
            var date = new Date();
            var minutes = 30;
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            this.cs.set('userName', res[0].userName, date);
            window.location.href = '/';
          }
          else {
            alert('Incorrect Username/Password')
          }
        });
  }

  register(value) {
    const { firstName, lastName, username, password } = value;
    const obj = {
      firstName: firstName,
      lastName: lastName,
      userName: username,
      password: password,
    };
    this.http.post(`${this.uri}/register`, obj)
        .subscribe(res => {
            alert('User Added Succesfully');
            window.location.href = '/login';
        });
  }

  addShop(shopName, shopMail, shopAddress, user, shopId) {
    const obj = {
      shopName: shopName,
      shopMail: shopMail,
      shopAddress: shopAddress,
      user: user,
      shopId: shopId,
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => window.location.href='/');
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getVersion() {
    return this
           .http
           .get(`${this.versionuri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(person_name, business_name, business_gst_number, id) {

    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_gst_number: business_gst_number
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
