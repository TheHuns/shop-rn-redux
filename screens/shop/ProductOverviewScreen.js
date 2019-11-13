import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemdata => (
        <ProductItem
          image={itemdata.item.imageUrl}
          title={itemdata.item.title}
          price={itemdata.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemdata.item.id,
              productTitle: itemdata.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemdata.item));
          }}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products"
};

export default ProductOverviewScreen;
