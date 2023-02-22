import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-country-input',
  templateUrl: './search-country-input.component.html',
  styles: [],
})
export class SearchCountryInputComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debounce: Subject<string> = new Subject();
  term: string = '';

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(400)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  searchCountry(term: string) {
    this.term = term;
    this.onSearch.emit(this.term);
  }

  pressKey(event: Event) {
    this.debounce.next(this.term);
  }
}
