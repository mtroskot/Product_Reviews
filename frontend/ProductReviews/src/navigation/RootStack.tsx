import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {eScreenNames} from 'src/types/enums';
import CreateReviewScreen from "src/screens/CreateReview";
import ProductReviewsScreen from "src/screens/ProductReviews";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={eScreenNames.CREATE_REVIEW}
        component={CreateReviewScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name={eScreenNames.PRODUCT_REVIEWS} component={ProductReviewsScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
