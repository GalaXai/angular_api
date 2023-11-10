import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit{
  accountCreationForm!: FormGroup;

  isFormTwoVisible: boolean = true;
  
  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.isFormTwoVisible$.subscribe(visible => {
      this.isFormTwoVisible = visible;
    });
    this.accountCreationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: any } | null {
    const password = formGroup.get('password')!.value;
    const confirmPassword = formGroup.get('confirmPassword')!.value;
    const email = formGroup.get('email')!.value;
    const confirmEmail = formGroup.get('confirmEmail')!.value;

    return (password === confirmPassword && email === confirmEmail) ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.accountCreationForm.valid) {
      // Convert the form data to a JSON string for storing
      const formDataJson = JSON.stringify(this.accountCreationForm.value);

      // Store the form data in session storage
      sessionStorage.setItem('accountData', formDataJson);
      
      this.sharedService.setLoggedIn(true);
      console.log('Form Submitted and data stored in session storage', this.accountCreationForm.value);
      // Further processing like sending data to server
    }
  }
}
