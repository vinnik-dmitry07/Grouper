import {Component, Input, OnInit} from '@angular/core';

import GeoPattern from 'geopattern';
import {Group} from '../shared/models/group';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  imageURL: string;

  @Input()
  group: Group;

  constructor() { }

  ngOnInit(): void {
    this.imageURL = GeoPattern.generate(this.group.name).toDataUrl();
  }

  copyToClipboard(copyInput): void {
    copyInput.select();
    document.execCommand('copy');
  }
}
