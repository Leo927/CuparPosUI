import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tax } from '../models/tax';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
	
	serverURL:string;
	endpoint:string;
  constructor(private http : HttpClient,
  			private messageService: MessageService) {
  	this.serverURL = 'https://cuparleopos.azurewebsites.net/api/taxes';
  	//this.serverURL = '/api';
   }

   get(id=null):Observable<Tax[]>{
   	
   	this.endpoint="";
   	if(isNaN(id))
   		this.endpoint = '/'+id;
	return this.http.get<Tax[]>(this.serverURL+this.endpoint)
      .pipe(
        catchError(this.handleError<Tax[]>('getTax', []))
      );
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TaxService: ${message}`);
  }

}
