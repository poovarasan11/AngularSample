import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Login page";
  email: string;
  password: string;

  onSubmit() {
    console.log(`Email:${this.email} password:${this.password}`);
  }
}
