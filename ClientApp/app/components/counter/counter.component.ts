import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {

    count: number = 0;

    incCount(): void {
        this.count++;
    }

    decCount(): void {
        this.count--;
    }

}
