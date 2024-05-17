import { View, Button, Text, Pressable, StyleSheet } from 'react-native';
import DateTimePicker,{DateTimePickerEvent} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import colors from '../themes/colors';
import { InputField } from './InputField';
import { globalStyles } from '../themes/globalStyles';
import { dateFormat } from '../helpers';

type Mode= 'date' | 'time'
type Props={
  onChange:(key:string,value:string)=>void,
  name:string
}
export function DatePicker(props:Props) {
    const [date, setDate] = useState<Date | undefined>(new Date(1598051730000));
    const [mode, setMode] = useState<Mode>('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
      const currentDate = selectedDate;
      setShow(false);
      props.onChange(props.name,dateFormat(currentDate,'en-US',{ year: 'numeric', month: '2-digit', day: '2-digit' }))
      setDate(currentDate);
    };
  
    const showMode = (currentMode:any) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <>
        <InputField 
            placeholder={dateFormat(date,'es',{dateStyle:'full'})}
            placeholderTextColor={colors.secondary}
            underlineColorAndroid={colors.secondaryOpacity}
            onFocus={showDatepicker}
            onChange={console.log}
            style={[globalStyles.inputField,{paddingVertical:0}]}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date ?? new Date()}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </>
    );
  }