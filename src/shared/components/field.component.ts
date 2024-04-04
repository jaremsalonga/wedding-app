import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IWField} from "../../core/interfaces/IWField";
import {FormsModule} from "@angular/forms";
// import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'w-field',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <div>
      <label for={{fieldName}} class="block text-sm font-medium leading-6 text-gray-900">{{ fieldTitle }}</label>
      <div class="mt-2">
        <input placeholder={{fieldPlaceHolder}}
               id={{fieldModel}}
               name={{fieldName}}
               type={{fieldType}}
               ngModel="{{fieldModel}}"
               autocomplete={{fieldName}}
               required={{fieldRule}}
               (change)=emitToParent($event)
               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <div [innerHTML]="fieldChild"></div>
      </div>
    </div>`
})

export class WField {
  @Input() _field! : IWField;
  @Output() childComponentValue = new EventEmitter<any>();

  // uniqueId = uuidv4();
  get fieldName() : string {
    return this._field.name
  }

  get fieldModel() : string {
    return this._field.model
  }

  get fieldTitle() : string {
    return this!._field.title
  }

  get fieldPlaceHolder() : string {
    return this!._field.placeholder || ""
  }

  get fieldType() : string {
    return this!._field.type
  }

  get fieldRule() : boolean {
    return this._field.isRequired || false;
  }

  get fieldChild() : string | HTMLHtmlElement {
    return this._field.child || "";
  }

  emitToParent(event : any) {
    return this.childComponentValue.emit(event);
  }
}
