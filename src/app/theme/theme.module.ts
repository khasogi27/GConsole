import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SharedModule } from '@shared/shared.module';
import { ListmenuComponent } from './listmenu/listmenu.component';

const COMPONENTS: any[] = [
  AdminLayoutComponent,
  HeaderComponent,
  SidemenuComponent,
  ListmenuComponent
];

@NgModule({
  declarations: [...COMPONENTS,],
  imports: [
    SharedModule
  ]
})
export class ThemeModule { }
