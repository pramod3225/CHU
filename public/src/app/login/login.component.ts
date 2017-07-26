import { Component } from '@angular/core';
import { Router }       from '@angular/router';
import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    error : string = "Please Enter valid Username and Password.";
    errorMessage : string = "";
    username : string = "";
    password : string = "";
    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }
    onLogin(event: any) {
        //alert(1);
        this.loginService.authLogin(this.username,this.password).subscribe(r=>{
            if (r.status) {
                this.router.navigate(['home']);
            }else{
                this.errorMessage = this.error;
            }

        });
    }
}
