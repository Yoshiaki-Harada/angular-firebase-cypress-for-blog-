import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export type Message = {
    content: string;
}
@Injectable({ providedIn: 'root' })
export class FirebaseService {
    constructor(private firestore: AngularFirestore) { }

    getValueChanges(): Observable<Message[]> {
        return this.firestore.collection<Message>('messages').valueChanges({ idField: 'id' });
    }
}