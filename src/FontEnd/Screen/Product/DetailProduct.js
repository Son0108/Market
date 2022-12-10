import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'

const {width, height} = Dimensions.get('window')
const DetailProduct = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
    </View>
  )
  return (
    <View>
      <Modal
        isVisible= {visibleModal}
        style={styles.modal}
        >
        {this.renderModalContent()}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})

export default DetailProduct