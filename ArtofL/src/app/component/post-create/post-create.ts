import { Component } from '@angular/core';
import {ImageUpload} from '../image-upload/image-upload';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-post-create',
  imports: [ImageUpload, NgOptimizedImage],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  constructor() {
  }

  showPostContainer (){
    const post = document.getElementById("post_container") || console.log("NO ELEMENT FOUND");
    if (post) {
      if (post.style.display == "none"){
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    }
  }

}
