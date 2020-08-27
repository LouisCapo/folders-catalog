import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { INode } from '../shared/model/folders-interfaces'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getFolders(): Observable<Array<INode>>{
    return this.http.get<Array<INode>>('http://localhost:3000/nodes');
  }

  deleteNode(id: string): Observable<INode>{
    return this.http.delete<INode>(`http://localhost:3000/node/${id}`)
  }

  addNewNode(nodeName: string, isFolder: boolean, parentId: string): Observable<INode>{
    let body = {
      name: nodeName,
      isType: isFolder ? 'folder' : 'file',
      parentId: parentId
    }
    return this.http.post<INode>(`http://localhost:3000/node/`, body)
  }

  getFolderChilds(id: string): Observable<Array<INode>>{
    return this.http.get<Array<INode>>(`http://localhost:3000/node/${id}/childs`);
  }

}
