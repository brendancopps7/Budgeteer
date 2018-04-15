import React from 'react'
import Slider from 'react-native-slider'
import {inject, observer} from 'mobx-react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

@inject('page') @observer
export default class Lookahead extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.props.page.incomeSliderVal}
          onValueChange={(value) => this.props.page.incomeSliderVal = value}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
          />
        <Text>Income:  ${parseFloat(Math.round(this.props.page.incomeSliderVal * 1000000) / 100).toFixed(2)}</Text>
        <Slider
          value={this.props.page.rentSliderVal}
          onValueChange={(value) => this.props.page.rentSliderVal = value}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
          />
        <Text>Rent: {parseFloat(Math.round(this.props.page.rentSliderVal * 10000) / 100).toFixed(2)}% ${parseFloat(Math.round((parseFloat(Math.round(this.props.page.incomeSliderVal * 1000000) / 100).toFixed(2)*this.props.page.rentSliderVal) * 100) / 100).toFixed(2)}</Text>
        <Slider
          value={this.props.page.foodSliderVal}
          onValueChange={(value) => this.props.page.foodSliderVal = value}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
          />
        <Text>Food: {parseFloat(Math.round(this.props.page.foodSliderVal * 10000) / 100).toFixed(2)}% ${parseFloat(Math.round((parseFloat(Math.round(this.props.page.incomeSliderVal * 1000000) / 100).toFixed(2)*this.props.page.foodSliderVal) * 100) / 100).toFixed(2)}</Text>
        <Slider
          value={this.props.page.travelSliderVal}
          onValueChange={(value) => this.props.page.travelSliderVal = value}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
          />
        <Text>Travel: {parseFloat(Math.round(this.props.page.travelSliderVal * 10000) / 100).toFixed(2)}% ${parseFloat(Math.round((parseFloat(Math.round(this.props.page.incomeSliderVal * 1000000) / 100).toFixed(2)*this.props.page.travelSliderVal) * 100) / 100).toFixed(2)}</Text>
        <Slider
          value={this.props.page.entertainmentSliderVal}
          onValueChange={(value) => this.props.page.entertainmentSliderVal = value}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
          />
        <Text>Entertainment: {parseFloat(Math.round(this.props.page.entertainmentSliderVal * 10000) / 100).toFixed(2)}% ${parseFloat(Math.round((parseFloat(Math.round(this.props.page.incomeSliderVal * 1000000) / 100).toFixed(2)*this.props.page.entertainmentSliderVal) * 100) / 100).toFixed(2)}</Text>
        <Slider
          value={this.props.page.otherSliderVal}
          onValueChange={(value) => this.props.page.otherSliderVal = value}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
          />
        <Text>Other: {parseFloat(Math.round(this.props.page.otherSliderVal * 10000) / 100).toFixed(2)}% ${parseFloat(Math.round((parseFloat(Math.round(this.props.page.incomeSliderVal * 1000000) / 100).toFixed(2)*this.props.page.otherSliderVal) * 100) / 100).toFixed(2)}</Text>
        <Text style={{marginTop: 5}}>Total: {this.props.page.sliderTotal}</Text>
        {this.props.page.sliderIsAbove &&
          <Text style={{marginTop: 5}} color="red">Percentage is too high!</Text>
        }
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
})
