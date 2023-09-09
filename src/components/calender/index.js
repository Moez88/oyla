import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LocaleConfig } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const CustomDateTimePicker = ({
  isVisible,
  onConfirm,
  onCancel,
  mode,

}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(isVisible);

  useEffect(() => {
    setDatePickerVisible(isVisible);
  }, [isVisible]);

  const hideDatePicker = () => {
    setDatePickerVisible(false);
    onCancel(); 
  };

  const handleDateConfirm = (date) => {
    onConfirm(date);
    hideDatePicker(); 
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

CustomDateTimePicker.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['date', 'time', 'datetime']),
};

CustomDateTimePicker.defaultProps = {
  mode: 'date',
};

export default CustomDateTimePicker;
