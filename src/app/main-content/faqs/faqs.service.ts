import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class FaqsService {

    private items = [
        {
            "title": "How do I apply?",
            "description": "We prioritize online applications, but we also entertain walk-in applicants."
        }, 
        {
            "title": "How long is the hiring process?",
            "description": "Our application process lasts for one (1) to three (3) weeks."
        }, 
        {
            "title": "How do I know the available positions?",
            "description": "Please visit our Career page to know the job that best suits your interest and abilities."
        },
        {
            "title": "What are the benefits that you provide?",
            "description": "We offer a high remuneration package and above industry perks and benefits. Click here to know more of what we have in store for you."
        }, 
        {
            "title": "Can I apply for different job positions?",
            "description": "We prioritize online applications, but we also entertain walk-in applicants."
        },
        {
            "title": "Do you provide accommodation for expat employees?",
            "description": "Yes. We provide accommodation. Wi-Fi subscriptions and housemaids are also provided."
        }, 
        {
            "title": "What is the working schedule?",
            "description": "Those who are working in the operations have three (3) shifts (morning, mid and night), which are shuffled monthly. For those that are working in the back office, the shift is 9AM to 6 PM."
        },
        {
            "title": "How is the processing of the working visa done?",
            "description": "The company will be in charge of applying the expat employee’s working permit and processing other pertinent legal documents. The employee must take note of the terms and condition that apply in the employment agreement."
        }, 
        {
            "title": "How many employees do you have?",
            "description": "We are a multinational company, which employs 300 to 350 employees. The nationalities that work here are Filipino, Malaysian, Chinese, Thai, Vietnamese, Indian, Korean, Japanese and Australian."
        }, 
        {
            "title": "What is your working environment?",
            "description": "Our organizational culture thrives through the following principles: equality, excellence and mutual respect."
        }
    ];

    getFaqs(){
        return this.items;
    }
}