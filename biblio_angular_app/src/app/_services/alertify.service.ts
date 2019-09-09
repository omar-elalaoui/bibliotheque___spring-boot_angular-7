import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(msg: string, func: () => {}){
    alertify.confirm(msg, function(e){
      if(e) { func(); }else{}
    });
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
