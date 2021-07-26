import { Component, OnInit } from '@angular/core';
import { MemberService } from './../../service/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
