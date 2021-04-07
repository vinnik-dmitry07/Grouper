import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {GroupService} from '../shared/services/group.service';
import {GroupModel, UserModel} from '../shared/models';
import {ITreeOptions, TreeComponent} from '@circlon/angular-tree-component';

@Component({
  selector: 'app-groups-tree',
  templateUrl: './groups-tree.component.html',
  styleUrls: ['./groups-tree.component.css']
})
export class GroupsTreeComponent implements OnInit, AfterViewInit {
  @Input()
  user: UserModel;

  @ViewChild('tree')
  tree: TreeComponent;

  constructor(private groupService: GroupService) {
  }

  treeNodes = [];

  options: ITreeOptions = {
    allowDrag: true,
  };

  ngAfterViewInit(): void {
    this.tree.sizeChanged();
  }

  ngOnInit(): void {
    this.groupService.loadGroups(this.user.id).subscribe(
      (groups: GroupModel[]) => {
        const nodes = [];
        const idGroupDict = {};

        for (const group of groups) {
          const node = Object.assign({children: []}, group);

          nodes.push(node);
          idGroupDict[node.id] = node;
          if (node.parentGroupId === null) {
            this.treeNodes.push(node);
          }
        }

        for (const node of nodes) {
          if (node.parentGroupId !== null) {
            idGroupDict[node.parentGroupId].children.push(node);
          }
        }

        this.tree.treeModel.update();
      },
      error => console.log(error),
    );

  }

  onMoveNode($event): void {
    $event.node.parentGroupId = $event.to.parent.id;
    this.groupService.updateGroup($event.node).subscribe(
      done => console.log(done),
      error => console.log(error),
    );
  }
}
