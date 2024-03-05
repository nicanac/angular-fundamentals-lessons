import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input type="text" name="title" id="title" [(ngModel)]="title" />
        <label for="body">Post Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          [(ngModel)]="body"
        ></textarea>

        <label for="username">username: </label>
        <input type="text" [(ngModel)]="username" />

        <label for="password">Password: </label>
        <input type="text" [(ngModel)]="password" />

        <button type="submit">Submit</button>
      </section>
      <section>
        <p>{{ this.title }}</p>
        <p>{{ this.body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  username: string = '';
  password: string = '';
  body: string = '';
  title: string = '';
}
