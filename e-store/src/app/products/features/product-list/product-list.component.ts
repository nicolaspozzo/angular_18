import { Component, inject } from '@angular/core';
import { ProductStateService } from '../data-access/product-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  providers: [ProductStateService]
})
export default class ProductListComponent {

  productsState = inject(ProductStateService)


}
