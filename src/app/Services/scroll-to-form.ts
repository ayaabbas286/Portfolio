import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToForm {
  scrollToContact() {
    const el = document.getElementById('contact-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
