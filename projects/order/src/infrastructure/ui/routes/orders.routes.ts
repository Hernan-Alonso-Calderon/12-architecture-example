import { Routes } from '@angular/router';
import { OrdersContainerComponent } from '../containers/orders-container/orders-container.component';

export const orderRoutes: Routes = [
  {
    path: '',
    component: OrdersContainerComponent,
  },
];
