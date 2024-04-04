import {Component} from "@angular/core";
import {WButton} from "../../shared/components/button.component";

@Component({
  template: `
    <w-button></w-button>`,
  standalone: true,
  imports: [
    WButton
  ],
  selector: 'login'
})

export class LoginComponent {

}
