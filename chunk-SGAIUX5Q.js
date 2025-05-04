import{Aa as r,Ba as a,Ca as i,Da as T,Ea as A,Fa as y,Ga as u,La as M,Ma as V,N as v,Na as H,S as g,Sa as C,T as h,Wa as F,Xa as z,Ya as I,_,aa as x,ab as U,bb as p,cb as L,da as B,fa as t,la as c,m as S,na as f,s as P,ua as e,va as j,wa as D,xa as k,ya as w,za as E}from"./chunk-V24YVKRS.js";import"./chunk-JKOY2XUY.js";function st(o,b){o&1&&T(0)}function ut(o,b){if(o&1&&i(0,"div",8),o&2){let l=u(2);e("innerHTML",l.highlightedHtml(),B)}}function bt(o,b){if(o&1&&i(0,"div",8),o&2){let l=u(2);e("innerHTML",l.highlightedTs(),B)}}function ft(o,b){if(o&1){let l=A();r(0,"div",5)(1,"div",6)(2,"button",7),y("click",function(){g(l);let d=u();return h(d.activeCodeView.set("html"))}),a(),r(3,"button",7),y("click",function(){g(l);let d=u();return h(d.activeCodeView.set("ts"))}),a()(),f(4,ut,1,1,"div",8)(5,bt,1,1,"div",8),a()}if(o&2){let l,n=u();t(2),j("!opacity-50",n.activeCodeView()!=="html"),e("label","HTML")("variant","text"),t(),j("!opacity-50",n.activeCodeView()!=="ts"),e("label","TS")("variant","text"),t(),D((l=n.activeCodeView())==="html"?4:l==="ts"?5:-1)}}var $=(()=>{class o{domSanitizer=v(U);highlighter=v(L);demo=_.required();highlightedHtml=C(()=>this.domSanitizer.bypassSecurityTrustHtml(this.highlighter.highlight("html",this.demo().html)));highlightedTs=C(()=>this.domSanitizer.bypassSecurityTrustHtml(this.highlighter.highlight("ts",this.demo().ts)));activeCodeView=x("html");isCodeViewActive=x(!1);static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-demo"]],inputs:{demo:[1,"demo"]},decls:6,vars:4,consts:[[1,"relative","flex","flex-col","bg-neutral-100","dark:bg-neutral-900"],[1,"pointer-events-none","absolute","flex","w-full","justify-end","p-2"],["djrButton","",1,"pointer-events-auto","!opacity-50",3,"click","icon","variant"],[1,"flex","min-h-60","items-center","justify-center","overflow-x-scroll"],[4,"ngComponentOutlet"],[1,"relative","h-full","w-full"],[1,"absolute","flex","w-full","justify-end","p-2"],["djrButton","",1,"!min-w-0","!text-xs",3,"click","label","variant"],[3,"innerHTML"]],template:function(n,d){n&1&&(r(0,"div",0)(1,"div",1)(2,"button",2),y("click",function(){return d.isCodeViewActive.set(!d.isCodeViewActive())}),a()(),r(3,"div",3),f(4,st,1,0,"ng-container",4),a(),f(5,ft,6,9,"div",5),a()),n&2&&(t(2),e("icon",d.isCodeViewActive()?"fa-solid fa-file":"fa-solid fa-file-code")("variant","text"),t(2),e("ngComponentOutlet",d.demo().component),t(),D(d.isCodeViewActive()?5:-1))},dependencies:[I,F,p],encapsulation:2,changeDetection:0})}return o})();var O=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-button-demo-basic"]],hostAttrs:[1,"flex","flex-col","gap-4"],decls:16,vars:29,consts:[[1,"flex","justify-center","gap-4"],["djrButton","",3,"label"],["djrButton","",3,"color","label"],["djrButton","",3,"variant","label"],["djrButton","",3,"color","variant","label"]],template:function(n,d){n&1&&(r(0,"div",0),i(1,"button",1)(2,"button",2)(3,"button",2),a(),r(4,"div",0),i(5,"button",3)(6,"button",4)(7,"button",4),a(),r(8,"div",0),i(9,"button",3)(10,"button",4)(11,"button",4),a(),r(12,"div",0),i(13,"button",3)(14,"button",4)(15,"button",4),a()),n&2&&(t(),e("label","Default"),t(),e("color","primary")("label","Primary"),t(),e("color","secondary")("label","Secondary"),t(2),e("variant","outline")("label","Default"),t(),e("color","primary")("variant","outline")("label","Primary"),t(),e("color","secondary")("variant","outline")("label","Secondary"),t(2),e("variant","text")("label","Default"),t(),e("color","primary")("variant","text")("label","Primary"),t(),e("color","secondary")("variant","text")("label","Secondary"),t(2),e("variant","link")("label","Default"),t(),e("color","primary")("variant","link")("label","Primary"),t(),e("color","secondary")("variant","link")("label","Secondary"))},dependencies:[p],encapsulation:2})}return o})();var q=`<div class="flex justify-center gap-4">
  <button djrButton [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'outline'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [variant]="'outline'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [variant]="'outline'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'text'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [variant]="'text'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [variant]="'text'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'link'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [variant]="'link'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [variant]="'link'" [label]="'Secondary'"></button>
</div>`;var N=`import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-basic',
  imports: [ButtonComponent],
  templateUrl: './button-demo-basic.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoBasicComponent {}
`;var G={component:O,html:q,ts:N};var J=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-button-demo-basic"]],hostAttrs:[1,"flex","flex-col","gap-4"],decls:16,vars:41,consts:[[1,"flex","justify-center","gap-4"],["djrButton","",3,"icon","label"],["djrButton","",3,"color","icon","label"],["djrButton","",3,"variant","icon","label"],["djrButton","",3,"color","variant","icon","label"]],template:function(n,d){n&1&&(r(0,"div",0),i(1,"button",1)(2,"button",2)(3,"button",2),a(),r(4,"div",0),i(5,"button",3)(6,"button",4)(7,"button",4),a(),r(8,"div",0),i(9,"button",3)(10,"button",4)(11,"button",4),a(),r(12,"div",0),i(13,"button",3)(14,"button",4)(15,"button",4),a()),n&2&&(t(),e("icon","fa-brands fa-github")("label","Default"),t(),e("color","primary")("icon","fa-brands fa-github")("label","Primary"),t(),e("color","secondary")("icon","fa-brands fa-github")("label","Secondary"),t(2),e("variant","outline")("icon","fa-brands fa-github")("label","Default"),t(),e("color","primary")("variant","outline")("icon","fa-brands fa-github")("label","Primary"),t(),e("color","secondary")("variant","outline")("icon","fa-brands fa-github")("label","Secondary"),t(2),e("variant","text")("icon","fa-brands fa-github")("label","Default"),t(),e("color","primary")("variant","text")("icon","fa-brands fa-github")("label","Primary"),t(),e("color","secondary")("variant","text")("icon","fa-brands fa-github")("label","Secondary"),t(2),e("variant","link")("icon","fa-brands fa-github")("label","Default"),t(),e("color","primary")("variant","link")("icon","fa-brands fa-github")("label","Primary"),t(),e("color","secondary")("variant","link")("icon","fa-brands fa-github")("label","Secondary"))},dependencies:[p],encapsulation:2})}return o})();var K=`<div class="flex justify-center gap-4">
  <button djrButton [icon]="'fa-brands fa-github'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [icon]="'fa-brands fa-github'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [icon]="'fa-brands fa-github'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'outline'" [icon]="'fa-brands fa-github'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [variant]="'outline'" [icon]="'fa-brands fa-github'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [variant]="'outline'" [icon]="'fa-brands fa-github'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'text'" [icon]="'fa-brands fa-github'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [variant]="'text'" [icon]="'fa-brands fa-github'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [variant]="'text'" [icon]="'fa-brands fa-github'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'link'" [icon]="'fa-brands fa-github'" [label]="'Default'"></button>
  <button djrButton [color]="'primary'" [variant]="'link'" [icon]="'fa-brands fa-github'" [label]="'Primary'"></button>
  <button djrButton [color]="'secondary'" [variant]="'link'" [icon]="'fa-brands fa-github'" [label]="'Secondary'"></button>
</div>`;var Q=`import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-basic',
  imports: [ButtonComponent],
  templateUrl: './button-demo-icon.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoIconComponent {}
`;var R={component:J,html:K,ts:Q};var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-button-demo-disabled"]],hostAttrs:[1,"flex","flex-col","gap-4"],decls:16,vars:29,consts:[[1,"flex","justify-center","gap-4"],["djrButton","","disabled","",3,"label"],["djrButton","","disabled","",3,"color","label"],["djrButton","","disabled","",3,"variant","label"],["djrButton","","disabled","",3,"color","variant","label"]],template:function(n,d){n&1&&(r(0,"div",0),i(1,"button",1)(2,"button",2)(3,"button",2),a(),r(4,"div",0),i(5,"button",3)(6,"button",4)(7,"button",4),a(),r(8,"div",0),i(9,"button",3)(10,"button",4)(11,"button",4),a(),r(12,"div",0),i(13,"button",3)(14,"button",4)(15,"button",4),a()),n&2&&(t(),e("label","Default"),t(),e("color","primary")("label","Primary"),t(),e("color","secondary")("label","Secondary"),t(2),e("variant","outline")("label","Default"),t(),e("color","primary")("variant","outline")("label","Primary"),t(),e("color","secondary")("variant","outline")("label","Secondary"),t(2),e("variant","text")("label","Default"),t(),e("color","primary")("variant","text")("label","Primary"),t(),e("color","secondary")("variant","text")("label","Secondary"),t(2),e("variant","link")("label","Default"),t(),e("color","primary")("variant","link")("label","Primary"),t(),e("color","secondary")("variant","link")("label","Secondary"))},dependencies:[p],encapsulation:2})}return o})();var X=`<div class="flex justify-center gap-4">
  <button djrButton [label]="'Default'" disabled></button>
  <button djrButton [color]="'primary'" [label]="'Primary'" disabled></button>
  <button djrButton [color]="'secondary'" [label]="'Secondary'" disabled></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'outline'" [label]="'Default'" disabled></button>
  <button djrButton [color]="'primary'" [variant]="'outline'" [label]="'Primary'" disabled></button>
  <button djrButton [color]="'secondary'" [variant]="'outline'" [label]="'Secondary'" disabled></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'text'" [label]="'Default'" disabled></button>
  <button djrButton [color]="'primary'" [variant]="'text'" [label]="'Primary'" disabled></button>
  <button djrButton [color]="'secondary'" [variant]="'text'" [label]="'Secondary'" disabled></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [variant]="'link'" [label]="'Default'" disabled></button>
  <button djrButton [color]="'primary'" [variant]="'link'" [label]="'Primary'" disabled></button>
  <button djrButton [color]="'secondary'" [variant]="'link'" [label]="'Secondary'" disabled></button>
</div>`;var Y=`import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-disabled',
  imports: [ButtonComponent],
  templateUrl: './button-demo-disabled.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoDisabledComponent {}
`;var Z={component:W,html:X,ts:Y};var tt=(()=>{class o{progress$=P(500).pipe(S(l=>l%10*10));static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-button-demo-progress"]],hostAttrs:[1,"flex","flex-col","gap-4"],decls:18,vars:43,consts:[[1,"flex","justify-center","gap-4"],["djrButton","",3,"progress","label"],["djrButton","",3,"progress","color","label"],["djrButton","",3,"progress","variant","label"],["djrButton","",3,"progress","color","variant","label"]],template:function(n,d){if(n&1&&(M(0),V(1,"async"),r(2,"div",0),i(3,"button",1)(4,"button",2)(5,"button",2),a(),r(6,"div",0),i(7,"button",3)(8,"button",4)(9,"button",4),a(),r(10,"div",0),i(11,"button",3)(12,"button",4)(13,"button",4),a(),r(14,"div",0),i(15,"button",3)(16,"button",4)(17,"button",4),a()),n&2){let m=H(1,41,d.progress$);t(3),e("progress",m)("label","Default"),t(),e("progress",m)("color","primary")("label","Primary"),t(),e("progress",m)("color","secondary")("label","Secondary"),t(2),e("progress",m)("variant","outline")("label","Default"),t(),e("progress",m)("color","primary")("variant","outline")("label","Primary"),t(),e("progress",m)("color","secondary")("variant","outline")("label","Secondary"),t(2),e("progress",m)("variant","text")("label","Default"),t(),e("progress",m)("color","primary")("variant","text")("label","Primary"),t(),e("progress",m)("color","secondary")("variant","text")("label","Secondary"),t(2),e("progress",m)("variant","link")("label","Default"),t(),e("progress",m)("color","primary")("variant","link")("label","Primary"),t(),e("progress",m)("color","secondary")("variant","link")("label","Secondary")}},dependencies:[p,z],encapsulation:2})}return o})();var et=`@let progress = progress$ | async;

<div class="flex justify-center gap-4">
  <button djrButton [progress]="progress" [label]="'Default'"></button>
  <button djrButton [progress]="progress" [color]="'primary'" [label]="'Primary'"></button>
  <button djrButton [progress]="progress" [color]="'secondary'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [progress]="progress" [variant]="'outline'" [label]="'Default'"></button>
  <button djrButton [progress]="progress" [color]="'primary'" [variant]="'outline'" [label]="'Primary'"></button>
  <button djrButton [progress]="progress" [color]="'secondary'" [variant]="'outline'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [progress]="progress" [variant]="'text'" [label]="'Default'"></button>
  <button djrButton [progress]="progress" [color]="'primary'" [variant]="'text'" [label]="'Primary'"></button>
  <button djrButton [progress]="progress" [color]="'secondary'" [variant]="'text'" [label]="'Secondary'"></button>
</div>

<div class="flex justify-center gap-4">
  <button djrButton [progress]="progress" [variant]="'link'" [label]="'Default'"></button>
  <button djrButton [progress]="progress" [color]="'primary'" [variant]="'link'" [label]="'Primary'"></button>
  <button djrButton [progress]="progress" [color]="'secondary'" [variant]="'link'" [label]="'Secondary'"></button>
</div>`;var ot=`import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-button-demo-progress',
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './button-demo-progress.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoProgressComponent {
  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));
}
`;var nt={component:tt,html:et,ts:ot};var at=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-button-demo-anchor"]],hostAttrs:[1,"flex","flex-col","gap-4"],decls:16,vars:29,consts:[[1,"flex","justify-center","gap-4"],["djrButton","","href","/",3,"label"],["djrButton","","href","/",3,"color","label"],["djrButton","","href","/",3,"variant","label"],["djrButton","","href","/",3,"color","variant","label"]],template:function(n,d){n&1&&(r(0,"div",0),i(1,"a",1)(2,"a",2)(3,"a",2),a(),r(4,"div",0),i(5,"a",3)(6,"a",4)(7,"a",4),a(),r(8,"div",0),i(9,"a",3)(10,"a",4)(11,"a",4),a(),r(12,"div",0),i(13,"a",3)(14,"a",4)(15,"a",4),a()),n&2&&(t(),e("label","Default"),t(),e("color","primary")("label","Primary"),t(),e("color","secondary")("label","Secondary"),t(2),e("variant","outline")("label","Default"),t(),e("color","primary")("variant","outline")("label","Primary"),t(),e("color","secondary")("variant","outline")("label","Secondary"),t(2),e("variant","text")("label","Default"),t(),e("color","primary")("variant","text")("label","Primary"),t(),e("color","secondary")("variant","text")("label","Secondary"),t(2),e("variant","link")("label","Default"),t(),e("color","primary")("variant","link")("label","Primary"),t(),e("color","secondary")("variant","link")("label","Secondary"))},dependencies:[p],encapsulation:2})}return o})();var rt=`<div class="flex justify-center gap-4">
  <a djrButton href="/" [label]="'Default'"></a>
  <a djrButton [color]="'primary'" href="/" [label]="'Primary'"></a>
  <a djrButton [color]="'secondary'" href="/" [label]="'Secondary'"></a>
</div>

<div class="flex justify-center gap-4">
  <a djrButton [variant]="'outline'" href="/" [label]="'Default'"></a>
  <a djrButton [color]="'primary'" [variant]="'outline'" href="/" [label]="'Primary'"></a>
  <a djrButton [color]="'secondary'" [variant]="'outline'" href="/" [label]="'Secondary'"></a>
</div>

<div class="flex justify-center gap-4">
  <a djrButton [variant]="'text'" href="/" [label]="'Default'"></a>
  <a djrButton [color]="'primary'" [variant]="'text'" href="/" [label]="'Primary'"></a>
  <a djrButton [color]="'secondary'" [variant]="'text'" href="/" [label]="'Secondary'"></a>
</div>

<div class="flex justify-center gap-4">
  <a djrButton [variant]="'link'" href="/" [label]="'Default'"></a>
  <a djrButton [color]="'primary'" [variant]="'link'" href="/" [label]="'Primary'"></a>
  <a djrButton [color]="'secondary'" [variant]="'link'" href="/" [label]="'Secondary'"></a>
</div>`;var it=`import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-anchor',
  imports: [ButtonComponent],
  templateUrl: './button-demo-anchor.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoAnchorComponent {}
`;var lt={component:at,html:rt,ts:it};var dt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["app-button-demo-anchor-disabled"]],hostAttrs:[1,"flex","flex-col","gap-4"],decls:16,vars:29,consts:[[1,"flex","justify-center","gap-4"],["djrButton","","href","/","disabled","",3,"label"],["djrButton","","href","/","disabled","",3,"color","label"],["djrButton","","href","/","disabled","",3,"variant","label"],["djrButton","","href","/","disabled","",3,"color","variant","label"]],template:function(n,d){n&1&&(r(0,"div",0),i(1,"a",1)(2,"a",2)(3,"a",2),a(),r(4,"div",0),i(5,"a",3)(6,"a",4)(7,"a",4),a(),r(8,"div",0),i(9,"a",3)(10,"a",4)(11,"a",4),a(),r(12,"div",0),i(13,"a",3)(14,"a",4)(15,"a",4),a()),n&2&&(t(),e("label","Default"),t(),e("color","primary")("label","Primary"),t(),e("color","secondary")("label","Secondary"),t(2),e("variant","outline")("label","Default"),t(),e("color","primary")("variant","outline")("label","Primary"),t(),e("color","secondary")("variant","outline")("label","Secondary"),t(2),e("variant","text")("label","Default"),t(),e("color","primary")("variant","text")("label","Primary"),t(),e("color","secondary")("variant","text")("label","Secondary"),t(2),e("variant","link")("label","Default"),t(),e("color","primary")("variant","link")("label","Primary"),t(),e("color","secondary")("variant","link")("label","Secondary"))},dependencies:[p],encapsulation:2})}return o})();var ct=`<div class="flex justify-center gap-4">
  <a djrButton href="/" [label]="'Default'" disabled></a>
  <a djrButton [color]="'primary'" href="/" [label]="'Primary'" disabled></a>
  <a djrButton [color]="'secondary'" href="/" [label]="'Secondary'" disabled></a>
</div>

<div class="flex justify-center gap-4">
  <a djrButton [variant]="'outline'" href="/" [label]="'Default'" disabled></a>
  <a djrButton [color]="'primary'" [variant]="'outline'" href="/" [label]="'Primary'" disabled></a>
  <a djrButton [color]="'secondary'" [variant]="'outline'" href="/" [label]="'Secondary'" disabled></a>
</div>

<div class="flex justify-center gap-4">
  <a djrButton [variant]="'text'" href="/" [label]="'Default'" disabled></a>
  <a djrButton [color]="'primary'" [variant]="'text'" href="/" [label]="'Primary'" disabled></a>
  <a djrButton [color]="'secondary'" [variant]="'text'" href="/" [label]="'Secondary'" disabled></a>
</div>

<div class="flex justify-center gap-4">
  <a djrButton [variant]="'link'" href="/" [label]="'Default'" disabled></a>
  <a djrButton [color]="'primary'" [variant]="'link'" href="/" [label]="'Primary'" disabled></a>
  <a djrButton [color]="'secondary'" [variant]="'link'" href="/" [label]="'Secondary'" disabled></a>
</div>`;var pt=`import { Component } from '@angular/core';
import { ButtonComponent } from 'djura/button';

@Component({
  selector: 'app-button-demo-anchor-disabled',
  imports: [ButtonComponent],
  templateUrl: './button-demo-anchor-disabled.component.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class ButtonDemoAnchorDisabledComponent {}
`;var mt={component:dt,html:ct,ts:pt};function kt(o,b){if(o&1&&i(0,"app-demo",1),o&2){let l=b.$implicit;e("demo",l)}}var $e=(()=>{class o{demos=[G,R,Z,nt,lt,mt];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=c({type:o,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"flex","flex-col","gap-4"],[3,"demo"]],template:function(n,d){n&1&&(r(0,"div",0),w(1,kt,1,1,"app-demo",1,k),a()),n&2&&(t(),E(d.demos))},dependencies:[$],encapsulation:2,changeDetection:0})}return o})();export{$e as ButtonsComponent};
