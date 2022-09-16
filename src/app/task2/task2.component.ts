import { Component, OnInit } from '@angular/core';
import { VillageDetailsService } from '../village-details.service';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  prodList:any=[];

  constructor(private service:VillageDetailsService) { }

  

  ngOnInit(): void {
    this.service.getProducts().subscribe((res)=>{
      this.prodList=res;
      console.log(res.products);
    })
  }

}
