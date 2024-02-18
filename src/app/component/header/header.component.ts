import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartQuantity = 0;
  // user!: User;

  constructor(cartService: CartService, ) {
    // private usersService: UsersService
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    // usersService.userObservable.subscribe((newUser) => {
    //   this.user = newUser;
    // })
  }

  // logout() {
  //   this.usersService.logout();
  // }

  // get isAuth() {
  //   return this.user.token;
  // }
}
