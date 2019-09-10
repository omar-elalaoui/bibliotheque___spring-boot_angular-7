import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(header: string, msg: string, func: () => void){
    alertify.confirm(msg, function(e){
      if(e) { func(); }
    }).setHeader(header);
  }

  success(msg: string){
    alertify.success(msg);
  }

  error(msg: string){
    alertify.error(msg);
  }

  message(msg: string){
    alertify.message(msg);
  }

}
