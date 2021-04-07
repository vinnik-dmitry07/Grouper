import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import GeoPattern from 'geopattern';
import {GroupModel, UserModel} from '../shared/models';
import {GroupService} from '../shared/services/group.service';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit, AfterViewInit {
  @Input()
  group: GroupModel;

  @Input()
  user: UserModel;

  newGroup: GroupModel;

  @Output()
  deleteGroupCard: EventEmitter<GroupModel> = new EventEmitter();

  @ViewChild('scrollToEl', {read: ElementRef})
  scrollToEl: ElementRef;

  constructor(private groupService: GroupService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.newGroup = new GroupModel();
  }

  ngAfterViewInit(): void {
    if (this.group.editing) {
      this.scrollToEl.nativeElement.scrollIntoView();
    }
  }

  generateBackground(name: string): string {
    return GeoPattern.generate(name).toDataUrl();
  }

  copyToClipboard(id: string): void {
    navigator.clipboard.writeText(id).then(
      () => console.log('Successful copy.'),
      () => console.log('Cannot copy!')
    );
  }

  editGroup(): void {
    this.group.editing = false;
    this.group.description = this.newGroup.description;
    this.group.usefulContent = this.newGroup.usefulContent;
    this.groupService.updateGroup(this.group).subscribe(
      data => console.log(data),
      error => console.log(error),
    );
  }

  leaveGroup(): void {
    this.userService.leaveGroup(this.group.id).subscribe(
      done => this.deleteGroupCard.emit(this.group),
      error => console.log(error),
    );
  }

  deleteGroup(): void {
    this.groupService.deleteGroup(this.group.id).subscribe(
      data => this.deleteGroupCard.emit(this.group),
      error => console.log(error),
    );
  }
}
