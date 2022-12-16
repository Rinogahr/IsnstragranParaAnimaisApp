import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';

const img1 = { uri: "imgs/1.jpg"}
const img2 = { uri: "imgs/1.jpg"}
const img3 = { uri: "imgs/1.jpg"}
const img4 = { uri: "imgs/1.jpg"}
const img5 = { uri: "imgs/1.jpg"}
const img6 = { uri: "imgs/1.jpg"}
const img7 = { uri: "imgs/1.jpg"}
const img8 = { uri: "imgs/1.jpg"}
const img9 = { uri: "imgs/1.jpg"}
const img10 = { uri: "imgs/1.jpg"}
const img11 = { uri: "imgs/1.jpg"}
const img12 = { uri: "imgs/1.jpg"}
export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerTop}>
        <ScrollView horizontal={true}  style={styles.scrollView}>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/11.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/12.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/1.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/2.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/3.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/4.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/5.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/6.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/7.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/8.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/9.jpg')} 
            style={styles.image}/>
          </View>
          <View style={styles.photographyCircle}>
            <Image source={require('./imgs/10.jpg')} 
            style={styles.image}/>
          </View>
        </ScrollView>
      </View>
      
      <View style={styles.containerMain}>
        <Text>Is=nstragran para animais
          
        </Text>
      </View>
      
      <View style={styles.containerButton}>
        <Text>conrtainerButton</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#242529',
    justifyContent: 'space-between',
  },
  containerTop:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingTop: 50,
  },
  containerMain:{
    flex: 7,
    width: '100%',
    borderColor: '#002fff',
    borderWidth: 1,
    backgroundColor: "#fefefe"
  },
  containerButton:{
    flex: 1,
    width: '100%',
    borderColor: '#5eff00',
    borderWidth: 1,
  },
  scrollView:{
    // flex: 1,
  },
  photographyCircle:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#cecece',
    borderColor: '#12ace9',
    borderWidth: 1,
    borderRadius: 50,
    width: 90,
    height: 90,
    padding: 10,
    marginLeft: 10,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 50,
    width: 85,
    height: 85,
  },
});
