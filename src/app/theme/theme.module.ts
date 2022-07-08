import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SharedModule } from '@shared/shared.module';
import { DropmenuComponent } from './dropmenu/dropmenu.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';

const COMPONENTS: any[] = [
  AdminLayoutComponent,
  HeaderComponent,
  SidemenuComponent,
  DropmenuComponent,
  RightmenuComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule
  ]
})
export class ThemeModule { }
