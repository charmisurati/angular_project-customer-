import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{CommonService} from './services/common.service';
import { AppComponent } from './app.component';
import { MasterpageComponent } from './masterpage/masterpage.component';
import{RouterModule,Routes} from '@angular/router';
import { ShopcategoryComponent } from './shopcategory/shopcategory.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';


const app:Routes=[ {path:'',redirectTo:'master',pathMatch:'full'},
                   {path:'master', component:MasterpageComponent,
                    children:[
                      {path:'',redirectTo:'master/homepage',pathMatch:'full'},
                      {path:'master/homepage',component:HomepageComponent},
                      {path:'master/shopcat',component:ShopcategoryComponent},
                      {path:'master/login', component:LoginComponent}
                    ]} ];
@NgModule({
  declarations: [
    AppComponent,
    MasterpageComponent,
    ShopcategoryComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app),
    FormsModule,
    HttpClientModule
  
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
