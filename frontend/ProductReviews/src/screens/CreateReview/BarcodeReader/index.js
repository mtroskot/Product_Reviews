import React from 'react';
import { StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const BarcodeReader = ({ startBarcodeReader, onBarCodeRead }) => {
  if (!startBarcodeReader) {
    return null;
  }
  return (
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel'
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel'
      }}
      onBarCodeRead={onBarCodeRead}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default React.memo(BarcodeReader);
