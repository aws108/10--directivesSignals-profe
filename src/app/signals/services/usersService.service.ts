import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { SingleUserReponse, User } from "../interfaces/user-request.interface";


@Injectable({
    providedIn: 'root'
})

export class UsersServiceService {
    constructor() { }

    private http = inject(HttpClient);
    private baseUrl = 'https://reqres.in/api/users';


    getUserById(id: number): Observable<User>{
        return this.http.get<SingleUserReponse>(`${this.baseUrl}/${id}`).pipe(map(response => response.data));
    }

}