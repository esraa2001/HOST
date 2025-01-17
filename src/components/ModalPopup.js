import React from 'react';
import {
  View,
  StyleSheet,
 
  Modal,
  
  Animated,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const ModalPopup = ({visible, children,onRequestClose}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}
      onRequestClose={onRequestClose}
      >
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: RFValue(20),
      paddingVertical: RFValue(30),
      borderRadius: RFValue(30),
      elevation: RFValue(20),
    
    },
    header: {
      width: '100%',
      height: RFValue(40),
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
  
  export default ModalPopup;