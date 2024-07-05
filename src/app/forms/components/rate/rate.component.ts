import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export interface RateOptions {
  rates: number,
  text?: string
}

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RateComponent,
    }
  ]
})
export class RateComponent implements ControlValueAccessor, OnInit {

  @Input() options!: RateOptions;

  public currentRate!: number;

  public ratesArr: number[] = [];

  public disabled: boolean = false;

  public touched: boolean = false;

  onChange = (currentRate: number) => {};

  onTouched = () => {};

  ngOnInit(): void {
    this.fillRatesArr();
  }

  public onRate(i: number): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.currentRate = i;
      this.onChange(this.currentRate);
    }
  }

  // ContolValueAccessor methods start
  public writeValue(rate: number): void {
    this.currentRate = rate;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  // ContolValueAccessor methods end

  private fillRatesArr(): void {
    let condition = true;
    let count = 1;
    while (condition) {
      this.ratesArr.push(count);
      if (count === this.options.rates) {
        condition = false;
      } else {
        count++;
      }
    }
  }
}

