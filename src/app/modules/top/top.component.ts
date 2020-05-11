import {Component, Injector, OnInit} from '@angular/core';
import {AbstractBaseComponent} from '../../@core/base/base.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent extends AbstractBaseComponent implements OnInit {

  constructor(readonly injector: Injector) {
    super(injector, {
      title: 'Home'
    });
  }

  ngOnInit(): void {
  }

}
