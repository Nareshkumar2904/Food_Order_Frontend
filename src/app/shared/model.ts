export class Food {
  id!: string;
  name!: string;
  price!: number;
  tags?: string[];
  favorite!: boolean;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}

export class Tag {
  name!: string;
  count!: number;
}

export class CartItem {
  constructor(public food: Food) { }
  quantity: number = 1;
  price: number = this.food.price;
}

export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;
}
