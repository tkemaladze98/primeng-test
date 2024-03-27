import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    ButtonModule,
    NgClass,
    NgFor,
    NgIf,
    MenubarModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    CheckboxModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public iconPath: string = 'assets/icons/';
  public imagePath: string = 'assets/images/';
  public formValues = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
    agreement: false,
    country: { name: 'United States', code: 'US' },
  };
  public countries: { name: string; code: string }[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
  ];
}
