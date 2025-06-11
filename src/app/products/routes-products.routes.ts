import { Routes } from '@angular/router';
import { ProductsLayoutComponent } from './layout/products-layout/products-layout.component';
import { ProductsComponent } from './pages/products/products.component';

export const productRoutes: Routes = [
    {
        path: '',
        component: ProductsLayoutComponent,
        children: [
            {
                path: '',
                component: ProductsComponent
            },
        ]
    }
]