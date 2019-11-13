import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
