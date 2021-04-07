import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormModel, GroupModel, PostModel, UserModel} from '../shared/models';
import {MarkdownEditorComponent} from '../markdown-editor/markdown-editor.component';
import {FormService} from '../shared/services/form.service';
import {PostService} from '../shared/services/post.service';
import {UserProgress} from '../progress-table/progress-table.component';
import {GroupService} from '../shared/services/group.service';

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
  data: UserProgress[] = [];

  constructor(private postService: PostService, private formService: FormService, private groupService: GroupService) {
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

        this.groupService.loadGroup(this.post.groupId).subscribe(
          (group: GroupModel) => {
            for (const user of group.participants.filter(u1 => !post.acknowledgeUsers.map(u => u.id).includes(u1.id))) {
              this.data.push({
                name: user.lastName + ' ' + user.firstName,
                content: null,
                value: 0,
              });
            }

            for (const user of group.participants.filter(u1 =>
              post.acknowledgeUsers.map(u => u.id).includes(u1.id) &&
              !this.post.forms.map(f => f.user.id).includes(u1.id))
              ) {
              this.data.push({
                name: user.lastName + ' ' + user.firstName,
                content: null,
                value: 50,
              });
            }

            for (const form of this.post.forms) {
              const newUserProgress: UserProgress = {
                name: form.user.lastName + ' ' + form.user.firstName,
                content: form.content,
                value: 100,
              };
              this.data.push(newUserProgress);
            }
          },
          error => console.log(error),
        );

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
