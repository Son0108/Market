import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const DetailProductSale = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
    </View>
  )
  return (
    <Modal
    isVisible= {visibleModal}
    style={styles.modal}
  >
    {this.renderModalContent()}
  </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})

export default DetailProductSale