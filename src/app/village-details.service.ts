import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VillageDetailsService {

  constructor(private http:HttpClient) { 

  }

  getProducts(){
    return this.http.get<any>('https://dummyjson.com/products');
  }

  saveVillageDetails(data:any){
  }
}
