import {Component, Input, OnInit, ViewChild} from '@angular/core';

import GeoPattern from 'geopattern';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  imageURL: string;
  @Input()
  name: string;
  @Input()
  teacher: string;
  @Input()
  iconURL: string;
  @Input()
  link: string;

  constructor() { }

  ngOnInit(): void {
    this.imageURL = GeoPattern.generate(this.name).toDataUrl();
  }

  copyToClipboard(copyInput): void {
    copyInput.select();
    document.execCommand('copy');
  }
}
