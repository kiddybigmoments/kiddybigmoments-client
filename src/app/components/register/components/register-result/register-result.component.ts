import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-result',
  templateUrl: './register-result.component.html',
  styleUrls: ['./register-result.component.css']
})
export class RegisterResultComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/gallery'])
    }, 2000)
  }
}
