import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';
import { INode } from 'src/app/shared/model/folders-interfaces';

@Component({
  selector: 'app-adding-new-nodes',
  templateUrl: './adding-new-nodes.component.html',
  styleUrls: ['./adding-new-nodes.component.scss']
})
export class AddingNewNodesComponent implements OnInit {

  @Input() parentId: string;

  @Output() onAddNewNode = new EventEmitter<INode>();

  nameControl: FormControl;
  isFolderControl: FormControl;

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.nameControl = new FormControl();
    this.isFolderControl = new FormControl(true);
  }

  addNewNode(){
    this.itemService.addNewNode(this.nameControl.value, this.isFolderControl.value, this.parentId).subscribe(res => {
      this.onAddNewNode.emit(res);
    })
  }

}
