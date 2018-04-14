import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Example1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WOW THIS WORKED</Text>
        <Button
          title='Super Cool Button'
        />
        <Button
          icon=
          {
            <Icon
              name='arrow-right'
              size={15}
              color='white'
            />
          }
          title='BUTTON WITH ICON'
        />

        <Button
          icon=
          {
            <Icon
              name='arrow-right'
              size={15}
              color='white'
            />
          }
          iconRight
          title='BUTTON WITH RIGHT ICON'
        />

        <Button
          title="LOADING BUTTON"
          loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle=
          {{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
