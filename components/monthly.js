import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { VictoryLine, VictoryPie, VictoryChart, VictoryTheme } from "victory-native";

export default class Monthly extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
            ]}/>
          </VictoryChart>
          <VictoryPie
            data=
            {[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
            ]}
          />
        </ScrollView>
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
    paddingTop: 20,
  },
})
