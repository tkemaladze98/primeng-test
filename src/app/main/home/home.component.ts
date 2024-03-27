import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    AccordionModule,
    BadgeModule,
    CommonModule,
    CardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public iconPath: string = 'assets/icons/';
  public imagePath: string = 'assets/images/';
  public images: string[] = [
    'Company logo.png',
    'Company logo (1).png',
    'Company logo (2).png',
    'Company logo (3).png',
    'Company logo (4).png',
  ];
  public responsiveOptions = [
    {
      breakpoint: '1000px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '800px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '400px',
      numVisible: 1,
      numScroll: 1,
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

  public accordionHeaders: string[] = [
    'Is there a free trial available?',
    'Can I change my plan later?',
    'What is your cancellation policy?',
    'Can other info be added to an invoice?',
    'How does billing work?',
    'How do I change my account email?',
  ];
  public expData = [
    {
      exp: '4,000+',
      header: 'Global customers',
      desc: 'We’ve helped over 4,000 amazing global companies.',
    },
    {
      exp: '600%',
      header: 'Return on investment',
      desc: 'Our customers have reported an average of ~600% ROI.',
    },
    {
      exp: '10k',
      header: 'Global downloads',
      desc: 'Our app has been downloaded over 10k times.',
    },
    {
      exp: '200+',
      header: '5-star reviews',
      desc: 'We’re proud of our 5-star rating with over 200 reviews.',
    },
  ];
}
