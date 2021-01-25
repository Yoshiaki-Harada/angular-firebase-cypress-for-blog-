import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
      map(value => value[0].content)
    )
  }
}
