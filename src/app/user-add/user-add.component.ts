import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../business.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  shopName: any;
  shopMail: any;
  shopAddress: {};
  shopId: any;
  constructor(private fb: FormBuilder, private bs: Service, private router:Router, private activatedRoute:ActivatedRoute, private cs: CookieService) 
  {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      user: this.fb.array([ this.createUser() ]),
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      plotno: ['', Validators.required ],
      locality: ['', Validators.required ],
      pincode: ['', Validators.required ],
    });
  }

  createUser(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
    });
  }

  addUserAndShop(shopName, shopMail, shopAddress) {
    this.bs.addShop(shopName, shopMail, shopAddress, this.userForm.controls.user.value, this.shopId);
  }

  addUser() {
    const users = this.userForm.controls.user as FormArray
    users.push(this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
    }));
  }

  ngOnInit() {
    let userName = this.cs.get('userName')
    console.log(userName)
    if (!userName) {
    window.location.href ='/login';
    }
    this.shopName=history.state.shopName;
    this.shopMail=history.state.shopMail;
    this.shopAddress=history.state.shopAddress;
    this.shopId=history.state.shopId;
  }

}
