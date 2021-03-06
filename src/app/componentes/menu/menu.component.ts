import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  faUsers = faUsers;
  faCode = faCode;
  constructor(private router: RouterModule) {}

  ngOnInit(): void {}
}
