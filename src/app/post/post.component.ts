import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormModel, PostModel, UserModel} from '../shared/models';
import {MarkdownEditorComponent} from '../markdown-editor/markdown-editor.component';
import {FormService} from '../shared/services/form.service';
import {PostService} from '../shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: PostModel;

  @Input()
  user: UserModel;

  @ViewChild('answerEditor')
  answerEditor: MarkdownEditorComponent;

  form: FormModel;

  done = false;

  constructor(private postService: PostService, private formService: FormService) {
  }

  ngOnInit(): void {
    this.postService.loadPost(this.post.id).subscribe(
      (post: PostModel) => {
        this.form = this.post.forms.find((f: FormModel) => f.user.id === this.user.id);
        if (!this.form) {
          this.form = new FormModel();
          this.form.postId = post.id;
          this.form.content = MarkdownEditorComponent.defaultContent;
        }
      },
      error => console.log(error),
    );
  }

  updateAnswer(): void {
    if (this.form.id) {
      this.formService.updateForm(this.form).subscribe(
        done => console.log(done),
        error => console.log(error),
      );
    } else {
      this.formService.createForm(this.form).subscribe(
        (form: FormModel) => this.form = form,
        error => console.log(error),
      );
    }
  }
}
