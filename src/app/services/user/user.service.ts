import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface user{
  companyId: number;
  companyName: string;
  isAdmin: number;
  name: string;
  userId: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string ="https://jupitermobiletest.jupiter-software.com:30081/jupitermobilex/gen/api/food";
  logiran: boolean = false;

  login(username:string, pass:string){
    console.log("username: ", username, " password: ", pass);
    
    this.logiran=false;

    this.http.post(this.url, {
      "db": "Food",
      "queries": [
          {
              "query": "spUsersAzur",
              "params": {
                  "action": "login",
                  "email": username,
                  "password": pass
              }
          }
      ]
    }).subscribe((res:Array<user>) => {
      if(res.length==1){
        this.logiran=true;
        console.log("logiran");
      }

    });
  }
}
