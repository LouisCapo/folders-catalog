import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { INode } from 'src/app/shared/model/folders-interfaces';
@Component({
  selector: 'app-folders-catalog',
  templateUrl: './folders-catalog.component.html',
  styleUrls: ['./folders-catalog.component.scss']
})
export class FoldersCatalogComponent implements OnInit {

  constructor(private itemService: ItemsService) { }

  @Input() parentId: string;

  items: Array<INode> = [];

  ngOnInit(): void {
    this.itemService.getFolders().subscribe(res => {
      res.forEach(elem => {
        if (elem.parentId === this.parentId){
          this.items.push(elem);
        }
      })
    })
  }

  deleteNodeFromList(id: string, index: number): void{
    this.itemService.deleteNode(id).subscribe(res => {
      this.items.splice(index, 1);
    })
  }

  addNewNode(item: INode): void{
    this.items.push(item);
  }

}
