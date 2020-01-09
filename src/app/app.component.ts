import { Component } from '@angular/core';
import { Movie } from './movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  watched = [
    new Movie("Knives Out", "Drama", 2019),
    new Movie("Rise of Skywalker", "Action", 2019)
  ];

  toWatch = [
    new Movie("some movie", "comedy", 2020),
    new Movie("another movie", "another comedy", 2030)
  ];
}
