import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appOnChangeId]', // Use this selector to apply the directive,
  standalone: true
})
export class OnChangeIdDirective implements OnInit, OnDestroy {


  constructor(private el: ElementRef) {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  private observeIdChanges() {


  }
}