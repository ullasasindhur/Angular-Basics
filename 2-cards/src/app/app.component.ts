import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      username: "nature",
      imageUrl: "assets/tree.jpeg",
      content: "I saw this wonderful tree during my hike today",
    },
    {
      title: "Snowy Mountain",
      username: "mountain",
      imageUrl: "assets/mountain.jpeg",
      content: "I saw this wonderful mountain during my hike today",
    },
    {
      title: "Mountain Biking",
      username: "biking",
      imageUrl: "assets/biking.jpeg",
      content: "Finally I did some biking today!!",
    },
  ];
}
