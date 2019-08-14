import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ios-switcher-tab',
  template: `<span>{{name}}</span>`,
  styleUrls: ['./tab.component.css'],
})
export class iOSSwitcherTabComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
