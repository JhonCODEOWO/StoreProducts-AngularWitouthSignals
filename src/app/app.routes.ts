import { Routes } from '@angular/router';
import { productRoutes } from './products/routes-products.routes';
import { cartRoutes } from './car-shopping/cart.routes';

export const routes: Routes = [
    {
        path: 'products',
        children: productRoutes
    },
    {
        path: '',
        redirectTo:'products',
        pathMatch: 'full',
    },
    {
        path: 'cart-shopping',
        children: cartRoutes
    }
];
