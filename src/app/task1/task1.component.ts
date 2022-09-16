import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  villagedata:any=[];
  noOfmembers:any;
  form=new FormGroup({
    vname:new FormControl('',[Validators.required]),
    gram:new FormControl('',[Validators.required]),
    fhead:new FormControl('',[Validators.required]),
    contact:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    business:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    members:new FormControl('',[Validators.required])
  })

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.villagedata=this.form.value;
    console.log(this.form.value)
  }
 


  constructor() { }

  ngOnInit(): void {
  }

}
