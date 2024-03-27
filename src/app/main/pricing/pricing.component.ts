import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
} from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    NgFor,
    NgIf,
    NgClass,
    ChartModule,
    CurrencyPipe,
    DatePipe,
    TableModule,
    FormsModule,
    DropdownModule,
    NgStyle,
    ProgressBarModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  public iconPath: string = 'assets/icons/';
  public imagePath: string = 'assets/images/';
  public showDelete: boolean = false;

  public selectedProduct: any = null;

  public statuses = [
    { label: 'Churned', value: 'Churned' },
    { label: 'Customer', value: 'Customer' },
  ];
  public cardsData = [
    {
      price: '$10/mth',
      paragraph: 'Basic plan',
      subHeader: 'Billed annually.',
      priorities: [
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support',
      ],
    },
    {
      price: '$20/mth',
      paragraph: 'Business plan',
      subHeader: 'Billed annually.',
      priorities: [
        '200+ integrations',
        'Advanced reporting and analytics',
        'Up to 20 individual users',
        '40GB individual data each user',
        'Priority chat and email support',
      ],
    },
    {
      price: '$40/mth',
      paragraph: 'Enterprise plan',
      subHeader: 'Billed annually.',
      priorities: [
        'Advanced custom fields',
        'Audit log and data history',
        'Unlimited individual users',
        'Unlimited individual data',
        'Personalised+priotity service',
      ],
    },
  ];
  public cards = [
    {
      header: 'Share team inboxes',
      desc: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      icon: 'pi-android',
    },
    {
      header: 'Deliver instant answers',
      desc: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      icon: 'pi-apple',
    },
    {
      header: 'Manage your team with reports',
      desc: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      icon: 'pi-bitcoin',
    },
    {
      header: 'Connect with customers',
      desc: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
      icon: 'pi-telegram',
    },
    {
      header: 'Connect the tools you already use',
      desc: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
      icon: 'pi-discord',
    },
    {
      header: 'Our people make the difference',
      desc: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
      icon: 'pi-prime',
    },
  ];
  public data = [
    {
      header: 'Is there a free trial available?',
      desc: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      header: 'Can I change my plan later?',
      desc: 'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
    },
    {
      header: 'What is your cancellation policy?',
      desc: 'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
    },
    {
      header: 'Can other info be added to an invoice?',
      desc: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      header: 'How does billing work?',
      desc: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
    },
    {
      header: 'How do I change my account email?',
      desc: 'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
    },
  ];
  public chartData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: '2021',
        data: [22, 25, 23, 28, 30, 26, 32, 29, 30, 28, 28, 35],
        fill: false,
        borderColor: '#7F56D9',
        tension: 0.4,
      },
      {
        label: '2020',
        data: [42, 43, 43, 42, 43, 37, 42, 43, 42, 43, 42, 43],
        fill: false,
        borderColor: '#B692F6',
        tension: 0.4,
      },
      {
        label: '2019',
        data: [52, 55, 57, 58, 60, 56, 62, 59, 60, 58, 58, 65],
        fill: false,
        borderColor: '#53389E',
        tension: 0.4,
      },
    ],
  };
  public options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: '#475467',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#475467',
        },
        grid: {
          color: 'transparent',
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: 'transparent',
        },
        grid: {
          color: '#F2F4F7',
          drawBorder: false,
        },
      },
    },
  };

  public testData = [
    {
      datasets: [
        {
          data: [120, 50],
          backgroundColor: ['#B692F6', '#F2F4F7'],
          hoverBackgroundColor: ['#B692F6', '#F2F4F7'],
        },
      ],
    },
    {
      datasets: [
        {
          data: [120, 30],
          backgroundColor: ['#7F56D9', '#F2F4F7'],
          hoverBackgroundColor: ['#7F56D9', '#F2F4F7'],
        },
      ],
    },
    {
      datasets: [
        {
          data: [120, 20],
          backgroundColor: ['#53389E', '#F2F4F7'],
          hoverBackgroundColor: ['#53389E', '#F2F4F7'],
        },
      ],
    },
  ];
  public testOptions = {
    cutout: '80%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        labels: {
          color: 'transparent',
        },
      },
    },
  };

  public products: Product[] = [
    {
      id: '1000',
      company: 'Catalog',
      companyLogo: 'Avatar.png',
      aboutSubContent: 'Brings all your news into one place',
      companySubName: 'catalogapp.io',
      status: { label: 'Customer', value: 'Customer' },
      about: 'Content curating app',
      users: [
        {
          img: 'image1.png',
          background: '#ABB677',
        },
        {
          img: 'image2.png',
          background: '#C7B9DA',
        },
        {
          img: 'image3.png',
          background: '#CFC3A7',
        },
      ],
      license: 75,
    },
    {
      id: '1001',
      company: 'Circooles',
      companyLogo: 'Avatar (1).png',
      aboutSubContent: 'Super lightweight design app',
      companySubName: 'getcirooles.com',
      status: { label: 'Churned', value: 'Churned' },
      about: 'Design software',
      users: [
        {
          img: 'image2.png',
          background: '#C7B9DA',
        },
        {
          img: 'image3.png',
          background: '#CFC3A7',
        },
      ],
      license: 65,
    },
    {
      id: '1002',
      company: 'Command+R',
      companyLogo: 'Avatar (2).png',
      aboutSubContent: 'AI and machine learning data',
      companySubName: 'cmdr.ai',
      status: { label: 'Customer', value: 'Customer' },
      about: 'Data prediction',
      users: [
        {
          img: 'image3.png',
          background: '#CFC3A7',
        },
      ],
      license: 40,
    },
    {
      id: '1003',
      company: 'Hourglass',
      companyLogo: 'Avatar (3).png',
      aboutSubContent: 'Time management and productivity',
      companySubName: 'hourglass.app',
      status: { label: 'Customer', value: 'Customer' },
      about: 'Productivity app',
      users: [
        {
          img: 'image1.png',
          background: '#ABB677',
        },
        {
          img: 'image2.png',
          background: '#C7B9DA',
        },
        {
          img: 'image3.png',
          background: '#CFC3A7',
        },
      ],
      license: 83,
    },
    {
      id: '1004',
      company: 'Layers',
      companyLogo: 'Avatar (4).png',
      aboutSubContent: 'Connect web apps seamlessly',
      companySubName: 'getlayers.io',
      status: { label: 'Churned', value: 'Churned' },
      about: 'Web app integrations',
      users: [
        {
          img: 'image1.png',
          background: '#ABB677',
        },
        {
          img: 'image3.png',
          background: '#CFC3A7',
        },
      ],
      license: 31,
    },
  ];

  public selectedProducts!: Product;

  public clonedProducts: { [s: string]: Product } = {};

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Product) {
    delete this.clonedProducts[product.id as string];
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id as string];
    delete this.clonedProducts[product.id as string];
  }
  public onRowDelete(product: Product) {
    this.products = this.products.filter((item: Product) => item !== product);
    this.selectedProduct = null;
  }
}

export interface Product {
  id?: string;
  company?: string;
  companyLogo?: string;
  companySubName?: string;
  status?: { label: string; value: string };
  about?: string;
  aboutSubContent?: string;
  license?: number;
  users?: { img: string; background: string }[];
}
