import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import Shop from '../Shop';
import { Service } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  shops: Shop[];

  constructor(private bs: Service, private cs: CookieService, private router: Router) { }

  ngOnInit() {
    let userName = this.cs.get('userName')
    console.log(userName)
    if (userName) {
    this.bs
      .getBusinesses()
      .subscribe((data: Shop[]) => {
        this.shops = data;
    });
  }
  else {
    window.location.href ='/login';
  }
  }

  logout() {
    this.cs.delete('userName');
    window.location.href ='/login';
  }

  addMore(shop) {
    console.log(shop)
    this.router.navigateByUrl('/user/create', {state: { 
      shopName: shop.shopName,
      shopMail: shop.shopMail,
      shopAddress: shop.shopAddress,
      shopId: shop.shopId
     } });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
