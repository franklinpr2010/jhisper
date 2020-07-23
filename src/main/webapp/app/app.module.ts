import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RfbloyaltSharedModule } from 'app/shared/shared.module';
import { RfbloyaltCoreModule } from 'app/core/core.module';
import { RfbloyaltAppRoutingModule } from './app-routing.module';
import { RfbloyaltHomeModule } from './home/home.module';
import { RfbloyaltEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RfbloyaltSharedModule,
    RfbloyaltCoreModule,
    RfbloyaltHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RfbloyaltEntityModule,
    RfbloyaltAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class RfbloyaltAppModule {}
