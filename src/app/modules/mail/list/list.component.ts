import {Component, Injector, OnInit} from '@angular/core';
import {AbstractBaseComponent} from '../../../@core/base/base.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends AbstractBaseComponent implements OnInit {

  constructor(readonly injector: Injector) {
    super(injector, {
      title: 'Mails'
    });
  }

  ngOnInit(): void {
  }

}
