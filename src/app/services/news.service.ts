import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=dc38d2088e954eb6a28aa1c12dce28e7"

  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }
}
