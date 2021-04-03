import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../shared/services/post.service';
import {PostModel} from '../shared/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
        this.postService.loadPosts(params['group-id']).subscribe(
          (posts: PostModel[]) => {
            console.log(posts);
          },
          error => {
            // alert(error);
            console.log(error);
          }
        );
      },
      error => {
        // alert(error);
        console.log(error);
      });
  }
}
