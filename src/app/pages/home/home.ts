import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { AboutUs } from "../../sections/about-us/about-us";
import { OurServices } from "../../sections/our-services/our-services";
import { WhyUs } from "../../sections/why-us/why-us";
import { CaseStudy } from "../../sections/case-study/case-study";
import { Faqs } from "../../sections/faqs/faqs";
import { Testimonials } from "../../sections/testimonials/testimonials";
import { Newsletter } from "../../sections/newsletter/newsletter";

@Component({
  imports: [Hero, AboutUs, OurServices, WhyUs, CaseStudy, Faqs, Testimonials, Newsletter],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
