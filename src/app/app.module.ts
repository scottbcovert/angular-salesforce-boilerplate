import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent, HomeComponent, ContactComponent, CreateContactComponent }  from './components/index';
import { SalesforceService, LoggerService, LOG_LEVEL } from './services/index';
import { SalesforceResolver } from './resolves/index';

import { ContentEditableModelDirective } from './directives/contentEditableModel.directive';
import { GravatarDirective } from './directives/gravatar.directive';

import { NewlineToBreakPipe, KeysPipe } from './pipes/index'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        CreateContactComponent,
        ContentEditableModelDirective,
        GravatarDirective,
        NewlineToBreakPipe,
        KeysPipe
    ],
    providers: [
        SalesforceService,
        LoggerService,
        SalesforceResolver,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private sfdc: SalesforceService, private log: LoggerService) {
        this.sfdc.controller = 'AngularAppController';
        this.log.logLevel = LOG_LEVEL.ALL;
    }
}
