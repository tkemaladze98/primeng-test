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
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public footerTexts: { header: string; items: string[] }[] = [
    {
      header: 'Product',
      items: [
        'Overview',
        'Features',
        'Solutions',
        'Tutorials',
        'Pricing',
        'Releases',
      ],
    },
    {
      header: 'Company',
      items: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    },
    {
      header: 'Resources',
      items: [
        'Blog',
        'Newsletter',
        'Events',
        'Help centre',
        'Tutorials',
        'Support',
      ],
    },
    {
      header: 'Use cases',
      items: [
        'Startups',
        'Enterprise',
        'Government',
        'SaaS',
        'Marketplaces',
        'Ecommerce',
      ],
    },
    {
      header: 'Social',
      items: [
        'Twitter',
        'LinkedIn',
        'Facebook',
        'GitHub',
        'AngelList',
        'Dribbble',
      ],
    },
    {
      header: 'Legal',
      items: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
    },
  ];

  public iconPath: string = 'assets/icons/';
  public imagePath: string = 'assets/images/';
  public items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/'],
    },
    {
      label: 'Products',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark',
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video',
            },
          ],
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash',
        },
        {
          separator: true,
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link',
        },
      ],
    },
    {
      label: 'Contact',
      routerLink: ['/contact'],
    },
    {
      label: 'Pricing',
      routerLink: ['/pricing'],
    },
  ];
  constructor() {}

  ngOnInit() {}
  public con(item: any): void {
    console.log(item);
  }
}
