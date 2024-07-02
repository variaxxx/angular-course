import {Component, OnInit} from '@angular/core';
import {Post} from "../../../requests/services/post.service";

@Component({
  selector: 'pipes',
  templateUrl: 'pipes.component.html',
  styleUrls: ['pipes.component.scss']
})

export class PipesComponent {

  // DataPipe
  // UpperCase
  // LowerCase
  // CurrencyPipe
  // DecimalPipe
  // PercentPipe

  public name: string = 'something written';
  public surname: string = 'DEVEloper';

  public date = new Date().toDateString();
}
