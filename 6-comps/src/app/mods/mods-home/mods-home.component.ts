import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  constructor() {}
  modalOpen = false;
  items = [
    {
      title: 'Why sky is blue?',
      content: 'The sky is blue',
    },
    {
      title: 'Why does orange take like?',
      content: 'Like a orange',
    },
    {
      title: 'Why color is cat?',
      content: 'The cat is blue',
    },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

  ngOnInit(): void {}
}
