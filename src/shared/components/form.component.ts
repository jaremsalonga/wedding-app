import {Component, EventEmitter, Input, Output} from "@angular/core";
import {WField} from "./field.component";
import {IWField} from "../../core/interfaces/IWField";
import {NgForOf} from "@angular/common";

@Component({
  template: `
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div *ngFor="let _field of _fields; trackBy : trackByFn">
          <w-field [_field]="_field" (childComponentValue)="receivedValueFromChild($event)"></w-field>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [
    WField,
    NgForOf
  ],
  selector: 'w-form'
})

export class WForm {

  @Input() _fields! : IWField[];

  @Output() formComponentValues = new EventEmitter<any>();

  private form : any = {};

  trackByFn(item : any) : number {
    return item.id;
  }

  receivedValueFromChild($event : any) {
    let {id , value} = $event.target
    this.form[id] = value;
    this.formComponentValues.emit(this)
  }
}
