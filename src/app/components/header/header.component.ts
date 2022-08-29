// import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
 
  constructor(private newsService:NewsService) { }
  topHeadingDisplay:any=[];

  ngOnInit(): void {

  this.newsService.topHeading().subscribe((result)=>{
    console.log(result);

    this.topHeadingDisplay=result.articles
    

  })

  }

}
