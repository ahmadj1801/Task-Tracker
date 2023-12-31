import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Click";
  @Input() colour: string = "black";
  @Output() btnClick = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }
}
