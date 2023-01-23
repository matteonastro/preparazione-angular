import { Component } from '@angular/core';
import { Post } from './post/post.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preparazione-angular';
  post_vect : Post[]=[];
  
  invia(user:HTMLInputElement, message:HTMLInputElement){
    console.log(user.value +" "+ message.value)

    this.post_vect.push(new Post(user.value,message.value));
  }

}
