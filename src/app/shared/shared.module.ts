import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import {NotificationService} from './messages/notification.service'

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule,
            FormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[RestaurantsService, NotificationService, ShoppingCartService]
    }
  }
}
