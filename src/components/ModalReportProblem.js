import {
  View,
  StatusBar,
  Modal,
  Text,
  Animated,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, lazy} from 'react';

import {COLORS, FONTS, SIZES, icons} from '../constants';

import ModalPopup from './ModalPopup';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux';
import {POST} from '../Helpers/ApiHelper';
import utils from '../utils';
const ModalReportProblem = ({visable, onPress, data, navigation}) => {
  const {userData} = useSelector(s => s.UserReducer);
  const {reports_data} = useSelector(s => s.AppDataReducer);
  const [showModal, setShowModal] = useState(visable);
  const [report, setReport] = useState([]);
  const [report_idx, setReport_idx] = useState(-1);

  useEffect(() => {}, []);
  const insert_report = async () => {
    let data_send = {
      student_id: userData.student_id,
      report_type: reports_data[report_idx],
      report_for: data?.report_for, //tweets , flash_cards, wqs, mcqs
      item_id: data?.item_id,
      course_id: data?.course_id,
    };
    let res = await POST('home/reports/insert_report.php', data_send);
    if (res) {
      utils.toastAlert('success', res);
      close();
    } else {
      utils.toastAlert('error', 'something went wrong');
    }
  };

  const close = () => {
    onPress();
  };

  return (
    <>
      <ModalPopup
        visible={showModal}
        onRequestClose={() => {
          // setHintModal(false)
          close();
        }}>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.primary,
            marginBottom: SIZES.margin,
          }}>
          Report Problem
        </Text>

        {reports_data?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setReport_idx(index);
              }}
              style={{
                padding: SIZES.base,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor:
                  report_idx == index ? COLORS.primary : COLORS.gray2,
                marginBottom: SIZES.base,
                borderRadius: RFValue(10),
              }}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.black,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.base,
          }}>
          <TouchableOpacity
            onPress={() => close()}
            style={{
              padding: SIZES.base,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.primary,
              // marginBottom: SIZES.base,
              // backgroundColor: COLORS.primary,
              borderRadius: RFValue(10),
              width: '45%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (report_idx !== -1) {
                insert_report();
              } else {
                utils.toastAlert('error', 'Please Choose Report Problem');
              }
            }}
            style={{
              padding: SIZES.base,
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth: 1,
              // borderColor: COLORS.primary,
              // marginBottom: SIZES.base,
              backgroundColor: COLORS.primary,
              borderRadius: RFValue(10),
              width: '45%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ModalPopup>
    </>
  );
};

export default ModalReportProblem;
