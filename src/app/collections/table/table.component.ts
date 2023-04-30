import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnChanges{
  @Input() data: {name: string, age:number, job:string, employed: boolean} = {name: '', age: 0, job: '', employed: false};
  @Input() name: string = ""
  @Input() headers:{key:string, value:string, show: boolean}[]=[{key:'', value:'', show: true}] ;
  @Input() className = "Basic";

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.data)
  }

  ngOnInit(): void {
  }

  ngAfterContetnChecked(){
    //console.log(this.data);
  }

  addNewData() {
    //this.data.push({name: 'Jim', age:29, job:'PM', employed: true});
  }  

  ngOnDestroy(): void{
    console.log('ngOnDestroy is called');
  }

  

}
