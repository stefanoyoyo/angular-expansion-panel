import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  sortedArray = []


  listA  = [
  { name : "Pink Floyd", 
    favSong : "Shine On You", 
    favMember :[
    {artist : "Nick Mason"}
  ]},
    { name : "Guns and Roses", 
    favSong : "November Rain", 
    favMember :[
    {artist : "Slash"}
  ]},
    { name : "Led Zeppelin", 
    favSong : "Stairway To heaven", 
    favMember :[
    {artist : "Jimmy page"}
  ]},
]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listA, event.previousIndex, event.currentIndex);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */