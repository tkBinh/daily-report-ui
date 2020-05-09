import {AfterViewInit, Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {AbstractBaseComponent} from '../../../@core/base/base.component';
import {NavigationEnd, RouterEvent} from '@angular/router';
import * as _ from 'lodash';
import {PageContent} from '../../../@core/services/page-content.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
export class MainLayoutComponent extends AbstractBaseComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(readonly injector: Injector) {
    super(injector);

    this.rxSubscribe(this.pageContentService.pageContentObserable, (content: PageContent) => {
      if (content) {
        if (typeof content.title !== 'undefined') {
          this.titleService.setTitle(content.title);
        }
        if (typeof content.mainClass !== 'undefined') {
          _.each(document.body.classList, (clazz) => {
            this.renderer.removeClass(document.body, clazz);
          });
          this.renderer.addClass(document.body, content.mainClass);
        }
      }
    });

    this.rxSubscribe(this.router.events, (event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        if (
          this.router.getCurrentNavigation().extras &&
          this.router.getCurrentNavigation().extras.state &&
          this.router.getCurrentNavigation().extras.state.keepScroll
        ) {
          return;
        }
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
