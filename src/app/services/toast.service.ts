import { Injectable } from '@angular/core';
import { toast } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  public success(response: any) {
    toast.fire({
      icon: 'success',
      title: this.capitalizeFirstLetter(response.info)
    });
  }

  public failed(response: any) {
    if(response!=null)
    {
      toast.fire({
        icon: 'error',
        title: this.capitalizeFirstLetter(response.info) + ' [' + response.code + ']'
      });
    }
    else
    {
      toast.fire({
        icon: 'error',
        title: 'Connection error'
      });
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
