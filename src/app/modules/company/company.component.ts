import {Component, Injector, OnInit} from '@angular/core';
import {AbstractBaseComponent} from '../../@core/base/base.component';
import {TopService} from '../../@core/services/top.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent extends AbstractBaseComponent implements OnInit {

  constructor(readonly injector: Injector) {
    super(injector, {
      title: 'Cong ty',
    });

    this.init();
  }

  init() {}

  ngOnInit(): void {
  }

}
