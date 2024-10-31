export interface Product {
    id: number;
    basic_data: {
      name: string;
      brand_name: string | null;
    };
    image: string[];
    price: {
      price: {
        original: number;
        discount: number | null;
      };
      currency: string;
    };
  }

  export interface CardProps {
    product: {
      basic_data: {
        name: string;
        brand_name: string | null;
      };
      image: string[];
      price: {
        price: {
          original: number;
          discount: number | null;
        };
        currency: string;
      };
    };
  }
  