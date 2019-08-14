import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { iOSSwitcherPage } from './ios-switcher.model';

@Component({
  selector: 'ios-switcher',
  template: `
    <div class="tab" [style.display]="tabProperties.ready ? 'block' : 'none'" [style.left]="tabProperties.left" [style.width]="tabProperties.width" [style.height]="tabProperties.height"></div>
    <ng-container *ngFor="let page of pages">
      <ios-switcher-tab [id]="page.name.toLowerCase().split(' ').join('-')" [name]="page.name" [ngClass]="{'selected' : page.selected}" (click)="handler(page)"></ios-switcher-tab>
    </ng-container>
  `,
  styleUrls: ['./ios-switcher.component.css'],
})
export class iOSSwitcherComponent implements OnInit, AfterViewInit {
  @Input() pages: Array<iOSSwitcherPage>;

  tabProperties = {
    width: "0px",
    height: "0px",
    left: "0px",
    ready: false
  }

  constructor () {
    
  }

  ngOnInit () {
    
  }

  ngAfterViewInit () {
    for(let page of this.pages) {
      if(page.selected) setTimeout(() => {
        this.positionSwitcherTab(page.name);
      })
    }
  }

  handler (switcherPage) {
    for (let page of this.pages) {
      if (page.name == switcherPage.name) page.selected = true;
      else if (page.selected) page.selected = false;
    }

    this.positionSwitcherTab(switcherPage.name)
    
    switcherPage.handler();
  }

  positionSwitcherTab(tabName: string) {
    let pageId = tabName.toLowerCase().split(' ').join('-');
    let element = document.getElementById(pageId);
    let elementProperties = {
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft
    };

    this.tabProperties = {
      width: `${elementProperties.width}px`,
      height: `${elementProperties.height}px`,
      left: `${elementProperties.left}px`,
      ready: (this.tabProperties.ready),
    }

    if(!this.tabProperties.ready) setTimeout(() => {
        this.tabProperties.ready = true;
      });
  }

}
