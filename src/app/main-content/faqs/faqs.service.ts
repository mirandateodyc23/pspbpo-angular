import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class FaqsService {

    private items = [
        {
            "item": "How do I apply?",
            "content": "We prioritize online applications, but we also entertain walk-in applicants."
        }, 
        {
            "item": "How long is the hiring process?",
            "content": "Our application process lasts for one (1) to three (3) weeks."
        }, 
        {
            "item": "How do I know the available positions?",
            "content": "Please visit our Career page to know the job that best suits your interest and abilities."
        },
        {
            "item": "What are the benefits that you provide?",
            "content": "We offer a high remuneration package and above industry perks and benefits. Click here to know more of what we have in store for you."
        }, 
        {
            "item": "Can I apply for different job positions?",
            "content": "We prioritize online applications, but we also entertain walk-in applicants."
        },
        {
            "item": "Do you provide accommodation for expat employees?",
            "content": "Yes. We provide accommodation. Wi-Fi subscriptions and housemaids are also provided."
        }, 
        {
            "item": "What is the working schedule?",
            "content": "Those who are working in the operations have three (3) shifts (morning, mid and night), which are shuffled monthly. For those that are working in the back office, the shift is 9AM to 6 PM."
        },
        {
            "item": "How is the processing of the working visa done?",
            "content": "The company will be in charge of applying the expat employee’s working permit and processing other pertinent legal documents. The employee must take note of the terms and condition that apply in the employment agreement."
        }, 
        {
            "item": "How many employees do you have?",
            "content": "We are a multinational company, which employs 300 to 350 employees. The nationalities that work here are Filipino, Malaysian, Chinese, Thai, Vietnamese, Indian, Korean, Japanese and Australian."
        }, 
        {
            "item": "What is your working environment?",
            "content": "Our organizational culture thrives through the following principles: equality, excellence and mutual respect."
        }
    ];

    getFaqs(){
        return this.items;
    }
}