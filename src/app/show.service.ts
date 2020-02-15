import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { ICurrentShow } from './icurrent-show';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }

   getCurrentShow(name:String): Observable<ICurrentShow>
   {
      return this.httpClient.get<ICurrentShowData>(
        `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appid=${environment.appdId}`
      ).pipe(map(data => this.transformToICurrentShow(data)))
    }
    private transformToICurrentShow(data: ICurrentShowData): ICurrentShow{
      return{
        showname: data[0].show.name,
        language: data[0].show.language,
        status: data[0].show.status,
        averagerating: data[0].show.rating.average,
        image: data[0].show.image.medium,
        summary: data[0].show.summary
      }
    }
  
}








