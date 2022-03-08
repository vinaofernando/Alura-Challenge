import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faCode,
  faSearch,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch;
  faUsers = faUsers;
  faCode = faCode;
  constructor() {}

  ngOnInit(): void {}
}
