import {Component} from "@angular/core";
import {WField} from "./field.component";
import {IWField} from "../../core/interfaces/IWField";
import {NgForOf} from "@angular/common";

@Component({
  template: `
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
             alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
          account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div *ngFor="let _field of _fields; trackBy : trackByFn">
            <w-field [_field]="_field" (childComponentValue)="receivedValueFromChild($event)"></w-field>
          </div>

          <div>
            <button type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    WField,
    NgForOf
  ],
  selector: 'w-button'
})

export class WButton {

  protected _fields : IWField[] = [{
    order : 1,
    type : "email",
    model : "email",
    title : "Email Address",
    name : "email",
    isRequired : true
  },{
    order : 2,
    type : "password",
    model : "password",
    title : "Password",
    name : "password",
    isRequired : true,
    child : `<div class="text-sm">
    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
    </div>`
  }];

  private form : any = {};

  trackByFn(item : any) : number {
    return item.id;
  }

  receivedValueFromChild($event : any) {
    let {id , value} = $event.target
    this.form[id] = value;
  }
}
