import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';

const app_routes :Routes =[
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},
    {path:'about',component:AboutComponent},
    {path:'product/:id',component:ProductComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];

export const APP_ROUTES = RouterModule.forRoot(app_routes,{useHash:true});