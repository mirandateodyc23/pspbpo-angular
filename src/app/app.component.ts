import { Component, DestroyRef, effect, inject, OnInit, signal, computed } from '@angular/core';
import { interval, map } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  interval = signal(0);
  doubleInterval = computed(() => this.interval() * 2);

  constructor() {
    effect(() => {
      console.log(`Clicked button ${this.interval()} times.`)
    });
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update(prevIntervalNumber => prevIntervalNumber + 1);
    //   // update some signal
    // }, 1000);

    const subcription = interval(1000).pipe(
      map((val) => val * 2)
    ).subscribe({
      next: (val) => console.log(val),
    });

    this.destroyRef.onDestroy(() => {
      subcription.unsubscribe();
    })
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
