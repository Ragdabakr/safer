

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SweetAlertsComponent } from "./extra/sweet-alerts/sweet-alerts.component";
import { ToastrComponent } from "./extra/toastr/toastr.component";
import { NouiSliderComponent } from "./extra/nouislider/nouislider.component";
import { UploadComponent } from './extra/upload/upload.component';
import { EditorComponent } from './extra/editor/editor.component';
import { DragDropComponent } from './extra/drag-drop/drag-drop.component';
import { TourComponent } from './extra/tour/tour.component';
import { CropperComponent } from './extra/cropper/cropper.component';
import { TagsInputComponent } from './extra/tags-input/tags-input.component';
import { SwitchComponent } from './extra/switch/switch.component';
import { SelectComponent } from './extra/select/select.component';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'sweetalerts',
        component: SweetAlertsComponent,
        data: {
          title: 'Sweet Alerts'
        }
      },
      {
        path: 'toastr',
        component: ToastrComponent,
        data: {
          title: 'Toastr'
        }
      },     
      {
        path: 'nouislider',
        component: NouiSliderComponent,
        data: {
          title: 'NoUI Slider'
        }
      },
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Quill Editor'
        }
      },
      {
        path: 'upload',
        component: UploadComponent,
        data: {
          title: 'Upload'
        }
      },
      {
        path: 'dragndrop',
        component: DragDropComponent,
        data: {
          title: 'Drag and Drop'
        }
      },
      {
        path: 'tour',
        component: TourComponent,
        data: {
          title: 'Tour'
        }
      },
      {
        path: 'cropper',
        component: CropperComponent,
        data: {
          title: 'Cropper'
        }
      },


      {
        path: 'tags',
        component: TagsInputComponent,
        data: {
          title: 'Tags'
        }
      }, 
      {
        path: 'switch',
        component: SwitchComponent,
        data: {
          title: 'Switch'
        }
      }, 
      {
        path: 'select',
        component: SelectComponent,
        data: {
          title: 'Select'
        }
      },    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIComponentsRoutingModule { }