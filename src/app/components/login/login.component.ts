import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {User} from '../../modeles/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {
  }

  userFormGroup = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    let userForm = this.userFormGroup.value;
    const user: User = {
      userName: userForm.userName,
      password: userForm.password
    };
    //Méthode provisoire!!
    /*this.loginService.checkConnexion1(user).subscribe(data => {
      console.log('data : ' + data);
      this.router.navigate(['/home']);
    });*/
    this.router.navigate(['/home']);
  }

  get userName() {
    return this.userFormGroup.get('userName');
  }

  get password() {
    return this.userFormGroup.get('password');
  }

}
