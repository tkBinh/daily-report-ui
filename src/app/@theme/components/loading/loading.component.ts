import {Component, Injector, OnInit} from '@angular/core';
import {LoadingData} from '../../../@core/services/loading.service';
import {AbstractBaseComponent} from '../../../@core/base/base.component';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent extends AbstractBaseComponent implements OnInit {
  show: boolean;
  data: LoadingData;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
