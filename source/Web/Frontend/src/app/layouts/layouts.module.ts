import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppFooterComponent } from "./footer/footer.component";
import { AppHeaderComponent } from "./header/header.component";
import { AppLayoutMainComponent } from "./layout-main/layout-main.component";
import { AppLayoutComponent } from "./layout/layout.component";
import { AppNavComponent } from "./nav/nav.component";
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    declarations: [
        AppFooterComponent,
        AppHeaderComponent,
        AppLayoutComponent,
        AppLayoutMainComponent,
        AppNavComponent
        
    ],
    imports: [
        RouterModule,
        MenubarModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppLayoutsModule { }
