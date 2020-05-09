import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PageContentService {
  private readonly pageContentObject$ = new BehaviorSubject<PageContent>(null);

  get pageContentObserable() {
    return this.pageContentObject$.asObservable();
  }

  setPageContent(pageContent: PageContent) {
    const mPageContent = this.pageContentObject$.getValue();
    this.pageContentObject$.next({ ...mPageContent, ...pageContent });
  }
}

export class PageContent {
  title?: string;
  mainClass?: string;
  color?: string;
  hasBanner?: boolean;
  activeSidebar?: string | undefined;
}
