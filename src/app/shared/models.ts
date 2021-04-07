export class BaseResponse {
  message: string;
}

export class UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
  passwordConfirm: string;

  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}

export class GroupModel {
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
  creatorId: number;
  creator: UserModel;
  editing: boolean;

  public constructor(init?: Partial<GroupModel>) {
    Object.assign(this, init);
  }
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

export class TreeNode {
  id: number;
  name: string;
  children: TreeNode[];
}
