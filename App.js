import React, { useEffect, useState } from 'react';
import axios from "axios"
import { ScrollView, Text, Image, Button, Alert, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function App() {

  const [ data, setData ] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/characters")
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ScrollView>
      <Text style={{marginVertical: 45, fontSize: 27, fontWeight: "bold", textAlign: "center"}}>
        Hello from React Native
      </Text>
      {/* what if I want to click the image? */}
      {/* use "TouchableOpacity" to make all clickable */}
      <TouchableOpacity onPress={() => Alert.alert("Don't push me!")}>
        {/* needs a source and style to show up depending on size */}
        <Image 
          source={{uri: "https://i.ytimg.com/vi/lohz29YN3mA/maxresdefault.jpg"}}
          style={{width: "100%", height: 100}}
        />
      </TouchableOpacity>
      {/* you can use alert.alert or alert.prompt */}
      {/* prompt get input from user */}
      <Button 
        onPress={() => Alert.alert("Yaaaaa!")} 
        title="Press me" 
        color="hotpink"
      />
      {data.map(char => {
        return (
          <View>
            <Text style={{textAlign: "center", marginVertical: 5, fontSize: 20, fontWeight: "bold"}}>{char.name}</Text>
            <Image 
              source={{uri: char.imgUrl}}
              style={styles.image}
            />
          </View>
        )
      })}
    </ScrollView>
  );
}

// cleaner of styling, then you can reuse the code
// prevents a lot of inline styling
// check line 45 for usage
const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 100, 
    marginHorizontal: 150
  },
})
