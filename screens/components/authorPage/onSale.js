import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import img1 from '../../../assets/img/cover/cover3.jpg';
import img2 from '../../../assets/img/cover/cover4.jpg';
import img3 from '../../../assets/img/cover/cover5.jpg';
import img4 from '../../../assets/img/cover/cover6.jpg';
import img5 from '../../../assets/img/cover/cover7.jpg';
import img6 from '../../../assets/img/cover/cover8.jpg';
import img7 from '../../../assets/img/cover/cover3.jpg';
import img8 from '../../../assets/img/cover/cover4.jpg';
import img9 from '../../../assets/img/cover/cover5.jpg';
import avaImg1 from "../../../assets/img/avatars/avatar.jpg";
import avaImg2 from "../../../assets/img/avatars/avatar2.jpg";
import avaImg3 from "../../../assets/img/avatars/avatar3.jpg";
import avaImg4 from "../../../assets/img/avatars/avatar4.jpg";
import avaImg5 from "../../../assets/img/avatars/avatar5.jpg";
import avaImg6 from "../../../assets/img/avatars/avatar6.jpg";
import avaImg7 from "../../../assets/img/avatars/avatar7.jpg";
import avaImg8 from "../../../assets/img/avatars/avatar8.jpg";
import avaImg9 from "../../../assets/img/avatars/avatar9.jpg";

const data = [
    {
      id: 1,
      img: img1,
      avatar: avaImg1,
      name: 'Fed3',
      owner: 'Admin',
      price: 3,
    },
    {
      id: 2,
      img: img2,
      avatar: avaImg2,
      name: 'Fed3',
      owner: 'Admin',
      price: 2,
    },
    {
      id: 3,
      img: img3,
      avatar: avaImg3,
      name: 'Fed3',
      owner: 'Admin',
      price: 4,
    },
    {
      id: 4,
      img: img4,
      avatar: avaImg4,
      name: 'Fed3',
      owner: 'Admin',
      price: 3,
    },
    {
      id: 5,
      img: img5,
      avatar: avaImg5,
      name: 'Fed3',
      owner: 'Admin',
      price: 2,
    },
    {
      id: 6,
      img: img6,
      avatar: avaImg6,
      name: 'Fed3',
      owner: 'Admin',
      price: 4,
    },
    {
      id: 7,
      img: img7,
      avatar: avaImg7,
      name: 'Fed3',
      owner: 'Admin',
      price: 3,
    },
    {
      id:8,
      img: img8,
      avatar: avaImg8,
      name: 'Fed3',
      owner: 'Admin',
      price: 1,
    },
    {
      id: 9,
      img: img9,
      avatar: avaImg9,
      name: 'Fed3',
      owner: 'Admin',
      price: 2,
    },
  ];
export const OnSale = () => {
  return (
    <View>
      {data.map(item => (
        <View style={styles.itemContainer}>
          <View style={styles.imageDiv}>
            <Image source={item.img} style={styles.img} />
          </View>
          <View style={styles.collectionMeta}>
            <View style={styles.detail}></View>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{flexDirection: "row", alignItems: "center", width: "100%"}}>
              <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.owner}>{item.owner}</Text>
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.info}>Reserve Price</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
              <Text style={styles.price}>{item.price} &#8364;</Text>
              <Text style={styles.price}>&#9825;</Text>
            </View>
          </View>
        </View>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  text2: {
    color: '#6164ff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  checkBox: {
    width: 350,
    height: 30,
    marginTop: 10,
  },
  checkBoxText: {
    color: '#fff',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#14142f',
    margin: 'auto',
    overflow: 'hidden',
    padding: 20,
  },
  itemContainer: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#14142f',
    margin: 'auto',
    borderWidth: 1,
    borderColor: '#887bff',
    padding: 25,
    borderRadius: 16,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    borderRadius: 16,
  },
  imageDiv: {
    position: 'relative',
  },
  collectionMeta: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  divider: {
    width: '100%',
    backgroundColor: '#887bff',
    height: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    width: '100%',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  info: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: '#bdbdbd',
    fontWeight: '400',
  },
  owner: {
    textAlign: 'left',
    fontSize: 20,
    color: '#bdbdbd',
    fontWeight: '400',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  price: {
    textAlign: 'left',
    fontSize: 26,
    marginTop: 20,
    color: '#fff',
    fontWeight: '600',
  },
});
