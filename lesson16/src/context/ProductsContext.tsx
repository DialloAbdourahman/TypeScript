import {
  ReactElement,
  createContext,
  useEffect,
  useContext,
  useState,
} from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

export type ProductsStateType = { products: ProductType[] };

const ProductsContext = createContext<{
  products: ProductType[];
}>({ products: [] });

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchedProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:3500/products')
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) {
            console.log(err.message);
          }
        });

      return data;
    };

    fetchedProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductsContext);
};

// npx json-server -w data/products.json -p 3500
