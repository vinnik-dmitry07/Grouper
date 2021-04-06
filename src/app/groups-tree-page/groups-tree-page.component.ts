/* tslint:disable */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-tree-page',
  templateUrl: './groups-tree-page.component.html',
  styleUrls: ['./groups-tree-page.component.css']
})
export class GroupsTreePageComponent implements OnInit {
  groups = [
    {
      "id": 3,
      "name": "Назва123",
      "identificator": "c1f8b2b8-722c-4b3b-b15f-7a66a7c059ae",
      "childGroups": [],
      "participants": [],
      "tasks": [],
      "description": null,
      "usefulContent": null,
      "parentGroupId": null,
      "creatorId": "90283096-bafb-477f-9f87-dd7e7937c4f9",
      "creator": {
        "id": "90283096-bafb-477f-9f87-dd7e7937c4f9",
        "firstName": "Vynnyk",
        "lastName": "Dmytro",
        "email": "vinnik.dmitry07@gmail.com",
        "password": null,
        "role": null
      }
    },
    {
      "id": 4,
      "name": "Назва234",
      "identificator": "b39c1300-c23b-4082-a032-08c938ec7afd",
      "childGroups": [],
      "participants": [],
      "tasks": [],
      "description": null,
      "usefulContent": null,
      "parentGroupId": 3,
      "creatorId": "90283096-bafb-477f-9f87-dd7e7937c4f9",
      "creator": {
        "id": "90283096-bafb-477f-9f87-dd7e7937c4f9",
        "firstName": "Vynnyk",
        "lastName": "Dmytro",
        "email": "vinnik.dmitry07@gmail.com",
        "password": null,
        "role": null
      }
    },
    {
      "id": 5,
      "name": "Назва234",
      "identificator": "b39c1300-c23b-4082-a032-08c938ec7afd",
      "childGroups": [],
      "participants": [],
      "tasks": [],
      "description": null,
      "usefulContent": null,
      "parentGroupId": 3,
      "creatorId": "90283096-bafb-477f-9f87-dd7e7937c4f9",
      "creator": {
        "id": "90283096-bafb-477f-9f87-dd7e7937c4f9",
        "firstName": "Vynnyk",
        "lastName": "Dmytro",
        "email": "vinnik.dmitry07@gmail.com",
        "password": null,
        "role": null
      }
    },
    {
      "id": 6,
      "name": "Назва234",
      "identificator": "b39c1300-c23b-4082-a032-08c938ec7afd",
      "childGroups": [],
      "participants": [],
      "tasks": [],
      "description": null,
      "usefulContent": null,
      "parentGroupId": 5,
      "creatorId": "90283096-bafb-477f-9f87-dd7e7937c4f9",
      "creator": {
        "id": "90283096-bafb-477f-9f87-dd7e7937c4f9",
        "firstName": "Vynnyk",
        "lastName": "Dmytro",
        "email": "vinnik.dmitry07@gmail.com",
        "password": null,
        "role": null
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
    let nodes = [];
    let toplevelNode;
    let lookupList = {};

    for (let group of this.groups) {
      let n = {
        id: group.id,
        name: group.name,
        parent_id: ((group.parentGroupId == 0) ? null : group.parentGroupId),
        children: []
      };
      lookupList[n.id] = n;
      nodes.push(n);
      if (n.parent_id === null) {
        toplevelNode = n;
      }
    }

    for (let node of nodes) {
      if (node.parent_id !== null) {
        lookupList[node.parent_id].children.push(node);
      }
    }

    console.log(toplevelNode);
  }

}
