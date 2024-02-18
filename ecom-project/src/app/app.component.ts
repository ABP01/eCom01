import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecom-project';

  constructor(){}

  ngOnInit() { }

  url:string = "../assets/img1.jpg";
  changeImage(event:any){
    console.log(event.target.src);
  }

}
