import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FirebaseService } from './firebase-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-app';
  message: Observable<string>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.message = this.firebaseService.getValueChanges().pipe(
      tap(e => console.log(e)),
      map(value => value[0].content)
    )
  }
}
