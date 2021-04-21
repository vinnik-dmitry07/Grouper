import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {CommentModel, GroupModel, PostModel, UserModel} from '../shared/models';
import {MarkdownEditorComponent} from '../markdown-editor/markdown-editor.component';
import { SignalRCommentsService } from '../shared/services/signal-r-comments.service';

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

  constructor(private postService: PostService, private signalRService: SignalRCommentsService) {
  }

  ngOnInit(): void {
    this.loadPosts();

    this.signalRService.startConnection();

    this.signalRService.addCommentsListner((comment: CommentModel) => {
      console.log("listner");
      
      this.posts.filter(x => x.id == comment.postId)[0].comments.push(comment);
    });
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

  sendComment($event){
    console.log($event);
    

    this.signalRService.sendComment($event);
   }
}
