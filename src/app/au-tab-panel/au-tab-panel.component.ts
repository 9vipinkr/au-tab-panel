import { Component, OnInit, ContentChildren,AfterContentInit,QueryList, TemplateRef, Input  } from '@angular/core';
import {AuTabComponent} from '../au-tab/au-tab.component';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class AuTabPanelComponent implements OnInit,AfterContentInit  {

  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>;
  @Input()
  headerTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(){
    console.log('tabs: '+this.tabs);
    const selectedTab=this.tabs.find((tab) => tab.selected );
    
    if(!selectedTab && this.tabs.first){
       this.tabs.first.selected=true;
    }
  } 
  selectTab(tab: AuTabComponent){
     this.tabs.forEach((tab) => tab.selected=false);
     tab.selected=true;
  }

  get tabsContext(){
    return{
      tabs: this.tabs
    }
  }
}
