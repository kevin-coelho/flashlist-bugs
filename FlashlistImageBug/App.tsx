// library deps
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {FasterImageView} from '@candlefinance/faster-image';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <FlashList
        ListHeaderComponent={HeaderComponent}
        renderItem={() => <ListItem />}
        data={new Array(10).fill(null)}
        estimatedItemSize={10}
      />
    </SafeAreaView>
  );
}

function HeaderComponent() {
  return (
    <View style={styles.header}>
      <ImageComponent />
    </View>
  );
}

function ListItem() {
  return (
    <View style={styles.listItem}>
      <NewImageComponent />
    </View>
  );
}

function ImageComponent() {
  return (
    <Image
      source={{uri: 'https://picsum.photos/200/200?random=0'}}
      resizeMode={'contain'}
      width={100}
      height={100}
      borderRadius={50}
    />
  );
}

function NewImageComponent() {
  return <FasterImageView
    onError={event => {
      console.warn(event.nativeEvent.error);
    }}
    style={{
      width: 100,
      height: 100,
    }}
    onSuccess={event => {
      console.log(event.nativeEvent);
    }}
    source={{
      borderRadius: 50,
      transitionDuration: 0.3,
      cachePolicy: 'discWithCacheControl',
      showActivityIndicator: true,
      url: 'https://picsum.photos/200/200?random=0',
      grayscale: 0,
    }}
  />
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: 'flex',
    height: '100%',
  },
  header: {
    display: 'flex',
    height: 400,
    backgroundColor: '#FAB',
    paddingTop: 15,
    paddingLeft: 10,
  },
  listItem: {
    display: 'flex',
    height: 400,
    backgroundColor: '#DEA',
    paddingLeft: 10,
  },
});
