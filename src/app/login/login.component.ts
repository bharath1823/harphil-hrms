
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
    loginForm: FormGroup;
    hide = true;

    constructor(private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }



    onLogin() {
        if (this.loginForm.valid) {
          
            Swal.fire({
                title: "Login success👍",
                text: "welcome to the harphil solutions pvt ltd",
                icon: "success"
              });
             this.router.navigateByUrl('/dashboard/db-im');
           
        } else {
            alert('Please fill out the form correctly.');
        }
    }

}
