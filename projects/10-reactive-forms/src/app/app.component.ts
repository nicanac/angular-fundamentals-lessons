import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <form name="blogForm" [formGroup]="blogPostForm" (ngSubmit)="handleFormSubmit()">
        <section>
          <label for="title">Post Title</label>
          <input type="text" id="title" formControlName="title" />

          <label for="body">Post Body</label>
          <textarea name="body" id="body" cols="30" rows="10" formControlName="body"></textarea>
        </section>
        <button type="submit">Submit Post</button>
      </form>
    </article>
    <article>
      <h2>Preview</h2>
      <section>
        <h3>{{ blogPostForm.get('title')?.value }}</h3>
        <p>{{ blogPostForm.get('body')?.value }}</p>
        @if(blogPostForm.invalid) {
          @if(blogPostForm.getError('title')) {
            <p>Title is required</p>
          }
          @if(blogPostForm.getError('body')) {
            <p>Body is required</p>
          }
        }
      </section>
    </article>
  `,
  styles: [],
})
export class AppComponent {
  blogPostForm = new FormGroup({
    title: new FormControl('',Validators.required),
    body: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  handleFormSubmit() {
    if(this.blogPostForm.invalid) {
      this.blogPostForm.getError('title');
      console.log('Form is invalid');
      return;
    }
    this.postBlog(
      this.blogPostForm.get('title')?.value,
      this.blogPostForm.get('body')?.value
    );
  }

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(`Posting blog titles ${title}, with the contents ${body}.`);
  }
}
