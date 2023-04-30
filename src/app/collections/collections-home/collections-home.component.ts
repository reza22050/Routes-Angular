import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
pathCompanies = 'companies'

data = [{name: 'Sara', age:24, job:'Designer', employed: true}, 
{name: 'Samir', age:31, job:'Developer', employed: true},
{name: 'John', age:42, job:'Ui Designer', employed: false}
]

header = [
  {key:'name', value:'Name', show: true}, 
  {key:'age', value:'Age', show: true}, 
  {key:'job', value:'Job', show: true}, 
  {key:'employed', value:'Employed', show: false}
]

ChangeFirstItem(){
 this.data[0].name= 'new data!'; 
}

DestroyFirstItem(){
  this.data.splice(0,1);
 }
 

}
