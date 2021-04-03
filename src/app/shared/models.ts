export class BaseResponse {
  message: string;
}

export class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
  passwordConfirm: string;
}

export class GroupModel {
  public constructor(init?: Partial<GroupModel>) {
    Object.assign(this, init);
  }

  id: number;
  name: string;
  identificator: string;
  childGroups: GroupModel[];
  participants: UserModel[];
  tasks: TaskModel[];
  description: string;
  usefulContent: string;
  parentGroupId: number;
  iconURL: string;
  teacher: string;
  editing: boolean;
}

export class FormModel {
  id: number;
  content: string;
  user: UserModel;
  postId: number;
}

export class CommentModel {
  id: number;
  text: string;
  sender: UserModel;
  postId: number;
}

export class TaskModel {
  id: number;
  caption: string;
  description: string;
  comments: CommentModel[];
  forms: FormModel[];
  groupId: number;
  acknowledgeUsers: UserModel[];
}

export class PostModel {
  id: number;
  caption: string;
  description: string;
  comments: CommentModel[];
  forms: FormModel[];
  groupId: number;
  acknowledgeUsers: UserModel[];
}
