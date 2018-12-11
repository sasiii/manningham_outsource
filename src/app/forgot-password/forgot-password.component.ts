import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["../../sass/pages/_forgot_password.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  rfLogin: FormGroup;
  constructor() {}

  ngOnInit() {
    this.rfLogin = new FormGroup({
      email: new FormControl("", [Validators.required]),
      checkUser: new FormControl("", [Validators.required])
    });
  }
  onSubmit() {
    if (this.rfLogin.valid) {
      alert("valid");
    } else {
      alert("unvalid");
    }
  }
}
