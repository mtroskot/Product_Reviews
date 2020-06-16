import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard, Button } from 'react-native';
import styles from 'src/screens/CreateReview/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarcodeReader from 'src/screens/CreateReview/BarcodeReader';
import ImageCapture from 'src/screens/CreateReview/ImageCapture';
import { addProductReview } from 'src/store/productReview/productReviewActions';
import { eScreenNames } from 'src/types/enums';

const CreateReview = (props) => {
  //STATE
  const cameraRef = useRef(null);
  const [productName, setProductName] = useState(null);
  const [productReview, setProductReview] = useState(null);
  const [barcodeData, setBarcodeData] = useState({ data: null, type: null });
  const [startBarcodeReader, setStartBarcodeReader] = useState(false);
  const [startImageCapture, setStartImageCapture] = useState(false);
  const [productImage, setProductImage] = useState({ base64: null, uri: null });

  //METHODS
  const handleInput = (value) => {
    console.log(value);
  };

  const onBarCodeRead = (event) => {
    const { data, type } = event;
    setBarcodeData({ data, type });
    toggleBarcodeReader();
    console.log(event.data);
  };

  const toggleBarcodeReader = () => {
    Keyboard.dismiss();
    setStartImageCapture(false);
    setStartBarcodeReader(!startBarcodeReader);
  };

  const toggleImageCapture = () => {
    Keyboard.dismiss();
    setStartBarcodeReader(false);
    setStartImageCapture(!startImageCapture);
  };

  function resetState() {
    setProductName(null);
    setProductReview(null);
    setProductImage({ base64: null, uri: null });
    setBarcodeData({ data: null, type: null });
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      toggleImageCapture();
      console.log('data komandata', data);
      const { base64, uri } = data;
      setProductImage({ base64, uri });
    }
  };

  function uploadReview() {
    const product = { name: productName, image: productImage.base64, review: productReview };
    props.addProductReview(product, barcodeData);
    resetState();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 0, alignItems: 'center', width: '90%' }}>
        {productImage.base64 && (
          <Image
            style={{ height: 200, width: 200 }}
            source={{
              uri: `data:image/png;base64,${productImage.base64}`
            }}
          />
        )}
        <TextInput
          value={productName}
          onChangeText={setProductName}
          placeholder={'Enter Product Name'}
          style={{ fontSize: 22, borderStyle: 'solid',borderWidth:1 }}
        />
        <TextInput
          multiline={true}
          value={productReview}
          onChangeText={setProductReview}
          placeholder={'Enter Product Review'}
          style={{ fontSize: 18, marginVertical: 5 }}
        />
        <TextInput value={barcodeData.data} editable={false} placeholder={'Barcode'} style={{ fontSize: 18, marginVertical: 5 }} />
        <TouchableOpacity onPress={toggleBarcodeReader}>
          <Text>Scan barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleImageCapture} style={{ marginVertical: 10 }}>
          <Text>Take Product picture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadReview}>
          <Text>Upload Review</Text>
        </TouchableOpacity>
      </View>
      <BarcodeReader {...{ startBarcodeReader, takePicture, onBarCodeRead }} />
      <ImageCapture {...{ startImageCapture, takePicture, onBarCodeRead, cameraRef }} />
      <Button title={'Go to Product List'} onPress={() => props.navigation.navigate(eScreenNames.PRODUCT_REVIEWS)} />
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  addProductReview
};

export default connect(null, mapDispatchToProps)(React.memo(CreateReview));
