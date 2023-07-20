import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'JQV-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router :Router,) { }

  ngOnInit(): void {
  }
  home(): void {
    this.router.navigate(['/home']);
  }
  Quienessomos(): void {
    this.router.navigate(['/quienessomos']);
  }

  contactenos(): void {
    this.router.navigate(['/contactenos']);
  }
  Registrarse(): void {
    this.router.navigate(['/registrarse']);
  }

}
