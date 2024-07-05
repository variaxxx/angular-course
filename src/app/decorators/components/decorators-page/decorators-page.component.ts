import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'decorators-page',
  templateUrl: 'decorators-page.component.html',
  styleUrls: ['decorators-page.component.scss']
})

export class DecoratorsPageComponent {

  public arr = [1, 2, 3, 4, 5];

  public isShow: boolean = true;
}
