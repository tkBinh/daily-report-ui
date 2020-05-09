import {Component, Injector, OnInit} from '@angular/core';
import {AbstractBaseComponent} from '../../@core/base/base.component';
import {TopService} from '../../@core/services/top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent extends AbstractBaseComponent implements OnInit {

  constructor(injector: Injector, topService: TopService)
  {
    super(injector, {
      title: 'Trang chu',
    });
    this.init();
  }

  init() {}

  ngOnInit(): void {
  }

}
