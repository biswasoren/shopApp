import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private cs: CookieService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      mail: ['', Validators.required ],
      address: this.fb.array([ this.createItem() ])
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

  addAddress() {
    const addresses = this.angForm.controls.address as FormArray
    addresses.push(this.fb.group({
      plotno: ['', Validators.required ],
      locality: ['', Validators.required ],
      pincode: ['', Validators.required ],
    }));
  }

  addUser() {
    const users = this.angForm.controls.user as FormArray
    users.push(this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
    }));
  }

  goToStep2() {
    this.router.navigateByUrl('/user/create', {state: { 
      shopName: this.angForm.controls.name.value,
      shopMail: this.angForm.controls.mail.value,
      shopAddress: this.angForm.controls.address.value
     } });
  }

  ngOnInit() {
    let userName = this.cs.get('userName')
    console.log(userName)
    if (!userName) {
    window.location.href ='/login';
    }
  }

}
