import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS: any[] = [
  AdminLayoutComponent,
  HeaderComponent,
  SidebarComponent,
  SidemenuComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule
  ]
})
export class ThemeModule { }
