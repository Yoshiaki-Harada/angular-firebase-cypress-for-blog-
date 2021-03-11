import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase/lib";
import { clearMessagesData, insertMessagesData } from "./setup";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
        }
    }
}
const fbConfig = {
    apiKey: "dummy-key",
    authDomain: "authDomain",
    projectId: "new-app-da206",
    storageBucket: "storageBucket",
    messagingSenderId: "dummyId",
    appId: "dummyId",
    measurementId: "dummyId"
};

firebase.initializeApp(fbConfig);

const firestoreEmulatorHost = Cypress.env("FIRESTORE_EMULATOR_HOST");
if (firestoreEmulatorHost) {
    firebase.firestore().settings({
        host: firestoreEmulatorHost,
        ssl: false,
        experimentalForceLongPolling: true
    });
}

attachCustomCommands({ Cypress, cy, firebase });

before(() => {
    clearMessagesData()
    insertMessagesData()
})
export { }
