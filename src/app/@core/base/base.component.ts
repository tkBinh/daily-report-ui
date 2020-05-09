import {ElementRef, Injector, OnDestroy, OnInit, Renderer2, Type} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {LoadingService} from '../services/loading.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment.prod';
import {PageContent, PageContentService} from '../services/page-content.service';
import {AbstractControlOptions, FormBuilder, FormGroup, ValidationErrors} from '@angular/forms';
import * as _ from 'lodash';
import {Location} from '@angular/common';

/**
 * @description
 * the data loading state class
 */
export enum DataLoadingState {
  Loading = 1,
  Loaded,
  Error,
}

/**
 * @description
 * The base class of all screen component of the project
 */
export abstract class AbstractBaseComponent implements OnInit, OnDestroy {
  /** the rxjs subcriptions */
  private subscriptions: Subscription[] = [];

  /**  the server data loading state */
  protected state: DataLoadingState;

  protected keepMessageOndestroy = false;

  /** the common service */
  // protected readonly translateService: TranslateService;
  protected readonly formBuilder: FormBuilder;
  protected readonly activatedRoute: ActivatedRoute;
  // protected readonly authenticationService: AuthenticationService;
  // protected readonly messageService: MessageService;
  protected readonly loadingService: LoadingService;
  protected readonly router: Router;
  // protected readonly mDBModalService: MDBModalService;
  // protected readonly deviceService: DeviceDetectorService;
  protected readonly titleService: Title;
  protected readonly pageContentService: PageContentService;
  protected readonly renderer: Renderer2;
  // protected readonly genericCodeService: GenericCodeService;
  // protected readonly changeDetectorRef: ChangeDetectorRef;
  protected readonly meta: Meta;
  protected readonly location: Location;

  showResult = false;
  /** the common field */
  baseResourceUrl = environment.baseResourceUrl;

  /**
   * constructor
   * @param injector the injector to inject that class a class that have `@Injectable` marker
   */
  constructor(protected injector: Injector, pageContent?: PageContent) {
    // this.translateService = this.injector.get(TranslateService);
    this.formBuilder = this.injector.get(FormBuilder);
    this.activatedRoute = this.injector.get(ActivatedRoute);
    // this.authenticationService = this.injector.get(AuthenticationService);
    this.router = this.injector.get(Router);
    // this.messageService = this.injector.get(MessageService);
    // this.mDBModalService = this.injector.get(MDBModalService);
    this.loadingService = this.injector.get(LoadingService);
    // this.deviceService = this.injector.get(DeviceDetectorService);
    this.titleService = this.injector.get(Title);
    this.pageContentService = this.injector.get(PageContentService);
    this.renderer = this.injector.get(Renderer2 as Type<Renderer2>);
    // this.genericCodeService = this.injector.get(GenericCodeService);
    // this.changeDetectorRef = this.injector.get(ChangeDetectorRef as Type<ChangeDetectorRef>);
    this.meta = this.injector.get(Meta);
    this.location = this.injector.get(Location);
    if (pageContent) {
      this.pageContentService.setPageContent(pageContent);
    }
    this.baseInit();
  }

  /**
   * initial some neccessary logic
   */
  private baseInit() {}

  /**
   * Init filter Form Group.
   */
  protected createForms(
    controlsConfig: {
      [key: string]: any;
    },
    options?:
      | AbstractControlOptions
      | {
      [key: string]: any;
    }
      | null,
  ) {
    return this.formBuilder.group(controlsConfig, options);
  }

  scrollToFirstError(form: ElementRef<HTMLElement>): void {
    if (form) {
      setTimeout(() => {
        const firstElementWithError = form.nativeElement.querySelector('.has-error');

        if (firstElementWithError) {
          // firstElementWithError.scrollIntoView({ behavior: 'smooth' });
          const top = firstElementWithError.getBoundingClientRect().top - document.querySelector('body').getBoundingClientRect().top - 59;
          const left = firstElementWithError.getBoundingClientRect().left - document.querySelector('body').getBoundingClientRect().left;
          window.scrollTo({
            top,
            left,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }

  rxSubscribe(obs: Observable<any>, next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    const subscription: Subscription = obs.subscribe(next, error, complete);
    this.subscriptions.push(subscription);

    return subscription;
  }

  rxUnsubscribe(subscription: Subscription) {
    this.subscriptions = _.reject(this.subscriptions, (s: Subscription) => s === subscription);
    subscription.unsubscribe();
  }

  rxUnsubscribeAll() {
    _.each(this.subscriptions, (subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  /**
   * on destroy view
   */
  ngOnDestroy(): void {
    if (!this.keepMessageOndestroy) {
      // this.messageService.clearMessage();
    }

    this.rxUnsubscribeAll();
  }

  /**
   * on init view
   */
  ngOnInit(): void {
  }

  /**
   * @returns the data loaded state
   */
  isDataLoaded(): boolean {
    return this.state === DataLoadingState.Loaded;
  }

  /**
   * @returns the data loading state
   */
  isDataLoading(): boolean {
    return this.state === DataLoadingState.Loading;
  }

  /**
   * @returns data load error state
   */
  isDataLoadedError(): boolean {
    return this.state === DataLoadingState.Error;
  }

  /**
   * set the data loading state
   */
  setDataLoadingState(state: DataLoadingState) {
    this.state = state;
  }

  getChildObject(object: any, key: string, additional?: { [key: string]: any }) {
    if (typeof object === 'object') {
      return { ...object[key], ...additional };
    }

    return null;
  }

  logFormValidationErrors(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(`Key control: ${key}, keyError: ${keyError}, err value: ${controlErrors[keyError]}`);
        });
      }
    });
  }

  async navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(commands, extras ? extras : { relativeTo: this.activatedRoute });
  }

  navigateNewTab(commands: any[], extras?: NavigationExtras) {
    const url = this.router.serializeUrl(this.router.createUrlTree(commands, extras ? extras : { relativeTo: this.activatedRoute }));
    const currentAbsoluteUrl = window.location.href;
    const currentRelativeUrl = this.router.url;
    const index = currentAbsoluteUrl.indexOf(currentRelativeUrl);
    const baseUrl = currentAbsoluteUrl.substring(0, index);
    window.open(baseUrl + url, '_blank');
  }
}
