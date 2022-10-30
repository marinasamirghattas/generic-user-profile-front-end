import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,throwError } from 'rxjs';
import { catchError, concatMap, delay, retryWhen, scan, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class GenericAPIHandlerService {
  
  baseURL:string='http://41.32.14.34:5000/countries/list/all';
  options: any[] = [];

  constructor(private http:HttpClient) {
   }

  

   getAll():Observable<any[]>{
    const headers = new HttpHeaders({ 'Authorization': 'Bearer abc123' })
    return this.http.get<any[]>(this.baseURL,{headers}).pipe(retryWhen(errors => errors.pipe(delay(2000),scan((retryCount) => {
      if (retryCount >= 2) {
        throw errors;
      } else {
        retryCount = retryCount + 1;
        console.log(retryCount);
        status = "Rerying Attempt #" + retryCount;
        return retryCount;
      }
    }, 0))));
   }
}
