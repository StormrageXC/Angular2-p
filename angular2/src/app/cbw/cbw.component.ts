import { Component, OnInit,Input ,DoCheck, KeyValueDiffers,Directive,ViewContainerRef,TemplateRef, ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { SpotifyService } from './../service';
@Directive({
  selector: '[ngBookIf]'
})
export class NgBookIf {
  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {}

  @Input() set ngBookIf(condition:any) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    }
    else {
      this.viewContainer.clear();
    }
  }
}
@Component({
  selector: 'app-cbw',
  templateUrl: './cbw.component.html',
  styleUrls: ['./cbw.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // providers: [SpotifyService]
})
export class CbwComponent implements OnInit, DoCheck{
  form:any;
  @Input() data:any;
  differ:any;
  a:any;
  constructor(private fb:FormBuilder, differs: KeyValueDiffers,  private changeDetectorRef: ChangeDetectorRef,) {
    this.a = new Date();

    this.differ = differs.find([]).create();
    this.form =  fb.group({
      'first': ['12333'],
      'sec':['1']
    })
  }

  ngOnInit(): void {
    this.data.subscribe((data:any)=>{
      this.a = data;
    })
  }
  ngDoCheck(){
    const changes = this.differ.diff(this.data);
    // this.changeDetectorRef.markForCheck();
    // changes.forEachChangedItem((r:any) => console.log(r));
  }
  submit(data:any){
    this.a = new Date();
    this.data.No = !this.data.No;
  }
}
