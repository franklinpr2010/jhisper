import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RfbloyaltSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [RfbloyaltSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
