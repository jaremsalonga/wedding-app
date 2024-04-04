type TWFieldTypes = 'text' | 'email' | 'number' | 'password';

export interface IWField {
  order : number,
  name : string,
  placeholder? : string,
  model : string,
  title : string,
  type : TWFieldTypes,
  isRequired? : boolean,
  child? : string | HTMLHtmlElement
}
