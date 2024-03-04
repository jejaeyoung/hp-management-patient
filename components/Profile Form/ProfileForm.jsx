import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const OvalLabelTextInput = ({ label, value, onChangeText, onTouch }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={(text) => onChangeText(text)}
      onTouchStart={onTouch}
    />
  </View>
);

const ProfileForm = () => {
  const [fullName, setFullName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSaveProfile = () => {
    console.log('Full Name:', fullName);
    console.log('Date of Birth:', selectedDate);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Gender:', gender);
    // Handle saving profile data (e.g., send data to server or update local storage)
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowButton}>
          <Text style={styles.arrowText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Fill Profile</Text>
      </View>

      {/* Profile Picture */}
      <Image
        style={styles.profilePicture}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD29ZbwcUoURx5JZQ0kEwp6y4_NmjEJhh2Z6OdKRkbUw&s' }}  // Replace with your profile picture link
      />

      <OvalLabelTextInput label="Full Name" value={fullName} onChangeText={setFullName} />

      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <OvalLabelTextInput
          label="Date of Birth"
          value={selectedDate ? selectedDate.toDateString() : ''}
          onTouch={() => setShowDatePicker(true)}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <View style={styles.calendarContainer}>
          <Text style={styles.subtitle}>Select a Date</Text>
          <CalendarPicker 
            onDateChange={handleDateChange} 
            selectedDayColor="#92a3fd"
            selectedDayTextColor="white"
            todayBackgroundColor="transparent"
            todayTextStyle={{ color: '#000' }}
            textStyle={{ color: '#000' }}
            customDatesStyles={[
              {
                date: selectedDate,
                style: { backgroundColor: '#92a3fd' },
                textStyle: { color: 'white' },
              },
            ]}
            dayShape="square"
            width={300}
            height={300}
            hideDayNames={true}
          />
        </View>
      )}

      <OvalLabelTextInput label="Email" value={email} onChangeText={setEmail} />

      <OvalLabelTextInput label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />

      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          prompt="Gender"
        >
          <Picker.Item label="" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <Text style={styles.pickerLabel}>Select Gender</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 20,
    color: '#007BFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    position: 'absolute',
    top: 8,
    left: 14,
    zIndex: 1,
    color: 'gray',
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
  },
  input: {
    height: 65,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
  },
  calendarContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    marginBottom: 12,
    position: 'relative',
  },
  picker: {
    height: 65,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  pickerLabel: {
    fontSize: 12,
    position: 'absolute',
    top: 8,
    left: 14,
    zIndex: 1,
    color: 'gray',
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
  },
  button: {
    backgroundColor: '#9dceff',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileForm;