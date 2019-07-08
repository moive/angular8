import { Injectable } from '@angular/core';



let users = [
    {
        "name":"Luis Salina",
        "age": 20,
        "hobby": "cantar"
    },
    {
        "name":"Day Meyers",
        "age": 30,
        "hobby": "patinar"
    },
    {
        "name":"Aguirre Ellis",
        "age": 25,
        "hobby": "correr"
    },
];

@Injectable({
    providedIn:  'root'
})

export class UserService {
    getUsers(){
        return users;
    }
}