import { Injectable } from '@angular/core';
  
import { ToastrService } from 'ngx-toastr';
  
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr: ToastrService) { }
  
  success(message){
      this.toastr.success(message)
  }
  
  error(message){
      this.toastr.error(message)
  }
  
  showInfo(message){
      this.toastr.info(message)
  }
  
  showWarning(message, title){
      this.toastr.warning(message, title)
  }
}