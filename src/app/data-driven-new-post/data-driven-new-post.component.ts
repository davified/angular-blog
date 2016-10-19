import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-data-driven-new-post',
  templateUrl: './data-driven-new-post.component.html',
  styleUrls: ['./data-driven-new-post.component.css']
})
export class DataDrivenNewPostComponent implements OnInit {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'body': new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    console.log(this.myForm)
  }

  ngOnInit() {
  }

}
