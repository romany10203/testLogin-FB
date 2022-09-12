import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cont = new FormGroup({
    name:new FormControl('' , [Validators.required]),
    messg:new FormControl('' , [Validators.required])
  });

  getMessg()
  {
    console.log(this.cont);
  }

  devs:any[] = 
  [
    {
      name:"Romany Monier",
      age:19,
      gitAcc:"https://github.com/romany10203?tab=repositories",
      email:"romanym2020@gmial.com",
      about:`Faculty of computer & information sciences, Ain-Shams University. Front-End developer`,
      img:"https://avatars2.githubusercontent.com/u/61164107?s=400&u=1517f26e086738c803701851872927c9a8d1b2f4&v=4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
