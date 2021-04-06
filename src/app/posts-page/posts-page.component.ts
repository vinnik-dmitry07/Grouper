import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupModel, PostModel} from '../shared/models';
import {GroupService} from '../shared/services/group.service';
import {MarkdownEditorComponent} from '../markdown-editor/markdown-editor.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  group: GroupModel;
  posts: PostModel[];

  @ViewChild('markdownEditorComponent')
  markdownEditorComponent: MarkdownEditorComponent;

  constructor(private groupService: GroupService, private activateRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
        this.groupService.loadGroup(params['group-id']).subscribe(
          group => this.group = group,
          error => console.log(error)
        );
      },
      error => {
        console.log(error);
      });
  }

  backClicked(): void {
    this.location.back();
  }
}
