import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {GroupModel, PostModel, UserModel} from '../shared/models';
import {MarkdownEditorComponent} from '../markdown-editor/markdown-editor.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: PostModel[];

  @Input()
  group: GroupModel;

  @ViewChild('markdownEditorComponent')
  markdownEditorComponent: MarkdownEditorComponent;

  @ViewChild('captionInput')
  captionInput: ElementRef;

  @Input()
  user: UserModel;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.loadPosts(this.group.id).subscribe(
      (posts: PostModel[]) => {
        this.posts = posts;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    const newPost = new PostModel();
    newPost.caption = this.captionInput.nativeElement.value;
    newPost.groupId = this.group.id;
    newPost.description = this.markdownEditorComponent.content;

    this.postService.createPost(newPost).subscribe(
      done => this.loadPosts(),
      error => console.log(error)
    );
  }
}
