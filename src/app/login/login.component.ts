import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  this.form = this.fb.group({

      username: ['', Validators.email],

      password: ['', Validators.required]

    });
  }


async onSubmit () {
	

 this.loginInvalid = false;

    this.formSubmitAttempt = false;

    if (this.form.valid) {
    try {
console.log("hello");
 const username = this.form.get('username').value;

        const password = this.form.get('password').value;
  
         this.router.navigate(['/home']);
         } catch (err) {

        this.loginInvalid = true;
         }
     
     }




}

}
