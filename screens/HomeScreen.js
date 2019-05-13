import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Mi Perfil",      color:"#FF4500", members:8,  image:"https://img.icons8.com/color/70/000000/name.png"},
        {id:1, title: "Vehiculos",     color:"#87CEEB", members:6,  image:"https://img.icons8.com/office/70/000000/home-page.png"},
        {id:2, title: "Contacto",     color:"#4682B4", members:12, image:"https://img.icons8.com/color/70/000000/two-hearts.png"} ,
        {id:3, title: "Pedidos",   color:"#00FFFF", members:8,  image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
        {id:4, title: "Metodos de pago",    color:"#20B2AA", members:23, image:"https://img.icons8.com/dusk/70/000000/globe-earth.png"} ,
        {id:5, title: "Historial", color:"#191970", members:45, image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        
      ]
    };
  }
  static navigationOptions = {
    title: 'Home',
  };

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item.view)}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});  