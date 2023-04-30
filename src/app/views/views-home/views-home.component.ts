import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  data = [
    {value: 22, label: '# of users'}, 
    {value: 48, label: '# like'},
    {value: 10, label: '# comment'}
  ]

  items = [
    {image: '/assets/images/chair.jpg', title: 'chair', description: 'This the chair' }, 
    {image: '/assets/images/ball.jpg', title: 'ball', description: 'This the ball' }
  ]

}
