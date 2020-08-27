import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { INode } from 'src/app/shared/model/folders-interfaces';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {

  @Input() name: string;
  @Input() isType: string;
  @Input() id: string;
  @Input() parentId: string;

  @Output() onDelete = new EventEmitter<string>();

  openedFolderItems: Array<INode> = [];
  isOpened: boolean = false;

  constructor(private itemService: ItemsService) { }

  deleteNodeFromList() {
    this.onDelete.emit(this.id);
  }

  openFolder(id: string) {
    this.isOpened = !this.isOpened;
  }

  test(event){
    console.log(event);
  }

  test2(event){
    console.log(event);
  }


}
