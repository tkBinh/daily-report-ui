import {Component, Injector, OnInit} from '@angular/core';
import {AbstractBaseComponent} from '../../../@core/base/base.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends AbstractBaseComponent implements OnInit {
  tasks = [
    {
      name: 'Task 1'
    },
    {
      name: 'Task 2'
    },
    {
      name: 'Task 3'
    },
    {
      name: 'Task 4'
    },
    {
      name: 'Task 5'
    },
    {
      name: 'Task 5'
    },
    {
      name: 'Task 5'
    },
    {
      name: 'Task 5'
    }
  ];

  constructor(readonly injector: Injector) {
    super(injector, {
      title: 'Tasks'
    });
  }

  ngOnInit(): void {
  }

}
