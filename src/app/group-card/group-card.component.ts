import {Component, Input, OnInit} from '@angular/core';

import GeoPattern from 'geopattern';
import {GroupModel} from '../shared/models';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  imageURL: string;

  @Input()
  group: GroupModel;

  constructor() {
  }

  ngOnInit(): void {
    this.imageURL = GeoPattern.generate(this.group.name).toDataUrl();
  }

  copyToClipboard(id: string): void {
    navigator.clipboard.writeText(id).then(() => {
        console.log('Successful copy.');
      },
      () => {
        console.log('Cannot copy!');
      });
  }
}
