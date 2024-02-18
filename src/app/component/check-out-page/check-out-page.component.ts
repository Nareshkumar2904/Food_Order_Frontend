import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  constructor(cartService: CartService, private formBuilder: FormBuilder, private usersService: UsersService, private toastrService: ToastrService,
    // private orderService: OrderService,
    private router: Router) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let { name, address } = this.usersService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    // if (!this.order.addressLatLng) {
    //   this.toastrService.warning('Please select your location on the map', 'Location');
    //   return;
    // }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);

    // this.orderService.create(this.order).subscribe({
    //   next: () => {
    //     this.router.navigateByUrl('/payment');
    //   },
    //   error: (errorResponse) => {
    //     this.toastrService.error(errorResponse.error, 'Cart');
    //   }
    // })
  }
}
