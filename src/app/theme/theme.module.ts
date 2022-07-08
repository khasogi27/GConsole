import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SharedModule } from '@shared/shared.module';
import { MenulistComponent } from './menulist/menulist.component';

const COMPONENTS: any[] = [
  AdminLayoutComponent,
  HeaderComponent,
  SidemenuComponent
];

@NgModule({
  declarations: [...COMPONENTS, MenulistComponent],
  imports: [
    SharedModule
  ]
})
export class ThemeModule { }
