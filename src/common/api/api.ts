import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCsyfpX3wp507Ursq0_WL3qXBqWwoxq3OE',
    authDomain: 'online-shop-3e999.firebaseapp.com',
    databaseURL: 'https://online-shop-3e999-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'online-shop-3e999',
    storageBucket: 'online-shop-3e999.appspot.com',
    messagingSenderId: '1027233524185',
    appId: '1:1027233524185:web:ea835eb7097c999ceed1c8'
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);