import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skeleton-screen';

  loaded = false;


  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 3000);

  }
}
