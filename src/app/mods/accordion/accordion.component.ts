import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items = [];
  openIndexItem = 0;

  onChangeShowItem(index: number){
    if(index === this.openIndexItem){
      this.openIndexItem = -1;
    }
    else
    {
      this.openIndexItem = index;
    }
  }

}
