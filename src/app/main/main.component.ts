import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  services = [
    'Salesforce Consulting Services',
    'Salesforce Customization Services',
    'Salesforce Integration Services',
    'Salesforce Industry Solutions',
    'Salesforce App Development Services',
    'Salesforce Lightning Services',
    'Salesforce Support & Maintenance Services',
  ];
  
  data = {
    projectSuccessRatio: 'Phenomenal 98% Project Success Ratio',
    title: 'Software Development Engineered For Business Excellence',
    description: 'We are your reliable software development partner, specialized in forging next-gen solutions that empower businesses for tomorrow.',
    buttonLabel: 'Tell Us About Your Project'
  };
  cardData = [
    {
      title: 'Custom Software Development',
      imageSrc: '../../assets/images/c1.png',
      description: 'Develop customized solutions tailored to business requirements that advance your company’s softwares effectively.',
    },
    {
      title: 'Mobile App Development',
      imageSrc: '../../assets/images/c2.png',
      description: 'High-end-to-end mobile app development for business analysis and deployment.',
    },
    {
      title: 'Product Engineering',
      imageSrc: '../../assets/images/c3.png',
      description: 'Designing, Development and Deployment, the 3Ds offered by our wide product engineering spectrum.',
    },
    {
      title: 'User Experience Design',
      imageSrc: '../../assets/images/c4.png',
      description: 'The next-gen user-centric UI/UX leads the higher timely engagement in your digital business.',
    },
  ];
  cardData1 = [
    {
      title: 'AI & ML Services',
      imageSrc: '../../assets/images/c9.png',
      description: 'We serve a smooth, enhanced and automated service range for AI and ML intelligent integration.',
    },
    {
      title: 'Q&A Testing',
      imageSrc: '../../assets/images/c10.png',
      description: 'Bug Check and rigorous product scanning for better real environment experience is core of our Q&A testing.',
    },
    {
      title: 'DevOps',
      imageSrc: '../../assets/images/c11.png',
      description: 'Plan smarter with our DevOps Services, dynamic results of automating and integrating IT implementations.',
    },
    {
      title: 'Digital Marketing',
      imageSrc: '../../assets/images/c12.png',
      description: 'Elevate your digital presence with the strategic representation of your brand with our best expertise.',
    },
  ];
  cardData2 = [
    {
      title: 'Web Application Development',
      imageSrc: '../../assets/images/c5.png',
      description: 'Cost-effective customized web development, and domain-specific web application to meet your business demands.',
    },
    {
      title: 'MVP Development',
      imageSrc: '../../assets/images/c6.png',
      description: 'Building Success with Minimum Viable Products- Our team specializes in creating efficient MVPs that help businesses validate their ideas and gain valuable insights.',
    },
    {
      title: 'IoT App Development',
      imageSrc: '../../assets/images/c7.png',
      description: 'Solutions and services for technology, tools, and developments for IoT are our leading project challenges.',
    },
    {
      title: 'Big Data Analytics',
      imageSrc: '../../assets/images/c8.png',
      description: 'We structure diverse Data analytics advancements for better operational improvement and insights.',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptions1: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
