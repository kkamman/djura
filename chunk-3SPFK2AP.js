import{Ca as e,Va as l,da as r,ja as m,ra as a,ta as o,ua as t,va as p}from"./chunk-FAMJQ5MA.js";import"./chunk-JKOY2XUY.js";var u=(()=>{class i{demos={importStylesheet:'@import "djura/theme.css";',addProvider:`import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideDjura } from 'djura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideDjura(),
  ],
};
`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=m({type:i,selectors:[["ng-component"]],decls:19,vars:4,consts:[[1,"flex","flex-col","gap-4"],[1,"inline-code"],[3,"language","code"]],template:function(n,d){n&1&&(o(0,"div",0)(1,"h1"),e(2,"Getting Started"),t(),o(3,"h2"),e(4,"Styles"),t(),o(5,"p"),e(6,"Import the "),o(7,"i",1),e(8,"theme.css"),t(),e(9," stylesheet."),t(),p(10,"demo-code-block",2),o(11,"h2"),e(12,"Provider"),t(),o(13,"p"),e(14," Add the "),o(15,"i",1),e(16,"provideDjura"),t(),e(17," provider to your app configuration. "),t(),p(18,"demo-code-block",2),t()),n&2&&(r(10),a("language","css")("code",d.demos.importStylesheet),r(8),a("language","ts")("code",d.demos.addProvider))},dependencies:[l],encapsulation:2,changeDetection:0})}return i})();export{u as GettingStartedComponent};
