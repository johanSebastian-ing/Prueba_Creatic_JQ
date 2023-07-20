import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'JQV-registarse',
  templateUrl: './registarse.component.html',
  styleUrls: ['./registarse.component.css']
})
export class RegistarseComponent implements OnInit {


  constructor(private router :Router,  ) { }

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
    this.router.navigate(['/registrar']);
  }

}
