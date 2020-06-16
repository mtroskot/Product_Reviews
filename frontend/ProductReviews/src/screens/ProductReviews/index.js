import React from 'react';
import { connect } from 'react-redux';
import { Image, Text, View, FlatList } from 'react-native';

const ProductReviews = ({productReviews}) => {
  return (
    <FlatList
      data={productReviews}
      renderItem={({ item }) => {
        const { product, barcodeData } = item;
        return (
          <View style={{ marginVertical: 20 }}>
            {product.image && (
              <Image
                style={{ height: 200, width: 200 }}
                source={{
                  uri: `data:image/png;base64,${product.image}`
                }}
              />
            )}
            <Text>{product.name}</Text>
            <Text>{product.review}</Text>
            <Text>{barcodeData.data}</Text>
          </View>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      bounces={false}
    />
  );
};

const mapStateToProps = (state) => ({
  productReviews: state.productReview.productReviews
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(React.memo(ProductReviews));
