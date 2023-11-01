import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/http';
import { ProductsModel } from 'src/app/core/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductsModel[] = [];
  
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private readonly toaster: ToastrService,
    private readonly translate: TranslateService,
  ){}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productsService.getData().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }

  editProduct(product: any) {
    this.router.navigate(['/edit-product'], {state: {product: product}});
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(
      (response) => {
        this.toaster.remove(this.translate.instant('Product Eliminado'))
      },
      (error) => {
        this.toaster.error(this.translate.instant('Ha ocurrido un error'));
      }
    );
  }
}

