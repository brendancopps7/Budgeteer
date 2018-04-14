import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default class Example1 extends React.Component {
  _onPressButton() {}
    render() {
      return (
        <view>
          <button
            style={styles.container}
            onPress={this._onPressButton}
            title="Add New Charge"
          />
          <form className="new-charge">
            <input type="text" name="charge" placeholder="charge" />
            <input type="number" name="charge-amt" placeholder="100.00" />
          </form>
        </view>
      );
    }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9533FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
