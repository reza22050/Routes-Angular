import { Component, ElementRef, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Input() isExistFooter = true;
  @Input() defaultButton = true;

  constructor(private el: ElementRef){
    console.log(el.nativeElement);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void{
    //document.body.removeChild(this.el.nativeElement);
    this.el.nativeElement.remove();
  }
  
  OnCloseClick(){
    this.onClose.emit();
  }

}
