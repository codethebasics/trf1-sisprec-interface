import { Component, Input } from '@angular/core';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() breadcrumbs: Breadcrumb[];
  
}
