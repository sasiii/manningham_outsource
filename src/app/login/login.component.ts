import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../../sass/pages/_login.scss"]
})
export class LoginComponent implements OnInit {
  rfLogin: FormGroup;
  constructor() {}

  ngOnInit() {
    this.rfLogin = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
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
