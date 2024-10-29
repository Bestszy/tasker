import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-notes-component',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgFor],
  templateUrl: './notes-component.component.html',
  styleUrl: './notes-component.component.css',
  providers: [CookieService]
})
export class NotesComponentComponent implements OnInit {
  notes:string[]=[];
  cart:string[]=[]
  
  constructor(
    private cookieservice: CookieService
  ){}
  ngOnInit(): void {
    if(this.cookieservice.check("notes")){
      this.loadFromCookies()
    }
  }
  addNote(note: string): void{
    this.notes.push(note);
    this.saveToCookies()
  }
  removeNote(index: number):void{
    this.notes.splice(index,1);
    this.saveToCookies()

  }
  removeAllNotes():void{
    this.notes=[];
    this.saveToCookies
  }
  saveToCookies(): void{
    this.cookieservice.set("notes",JSON.stringify(this.notes))
  }
  loadFromCookies():void{
    this.notes=JSON.parse(this.cookieservice.get("notes"));
  }
  saveLocal(note: string): void{
    this.cart.push(note)
    localStorage.setItem("a",JSON.stringify(this.cart))
  }
}
