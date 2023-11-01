import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/http';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product: any;
  query = {
    name: '',
    description: '',
    code: '',
    price: '',
  };

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private readonly toaster: ToastrService,
    private readonly translate: TranslateService,
    ){
    this.product = this.router.getCurrentNavigation().extras.state.product;
    }

  ngOnInit(): void {
    if (this.product) {
      this.query.name = this.product.name;
      this.query.description = this.product.description;
      this.query.code = this.product.code;
      this.query.price = this.product.price;
    }
  }

  save() {
    this.productsService.putProduct(this.query).subscribe(
      (response) => {
        this.toaster.success(this.translate.instant('Datos guardados!'));
      },
      (error) => {
        this.toaster.error(this.translate.instant('Ha ocurrido un error!'));
      }
    );
  }
}
