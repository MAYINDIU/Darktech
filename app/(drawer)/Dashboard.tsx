import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import ImageSlider from '@coder-shubh/react-native-image-slider';

export default function Dashboard() {
  const images = new Array(6).fill(
    'https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg',
  );
  return (
     
    <View >

   <View style={{marginBottom:50}}>
   <ImageSlider
    images={images}
    imageHeight={430} // SAME as Card height

    dotSize={8}
    dotColor="#ccc"
    activeDotColor="#0077FF"
    showNavigationButtons={false}
    autoSlideInterval={4000}
    radius={5}
    
  />
   </View>






    <View style={styles.container}>



      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image style={{height:45,width:45}} source={require('../../assets/icons/teamwork.png')}/>
          <Text variant="bodyMedium" style={{marginTop:10,fontWeight:'bold',color:'#333',fontSize:13}}>PARTNER</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image style={{height:45,width:45}} source={require('../../assets/icons/deposit.png')}/>
          <Text variant="bodyMedium" style={{marginTop:10,fontWeight:'bold',color:'#333',fontSize:13}}> DEPOSIT</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image style={{height:45,width:45}} source={require('../../assets/icons/loan.png')}/>
          <Text variant="bodyMedium" style={{marginTop:10,fontWeight:'bold',color:'#333',fontSize:13}}>LOAN</Text>
        </Card.Content>
      </Card>


      
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image style={{height:45,width:45}} source={require('../../assets/icons/teamwork.png')}/>
          <Text variant="bodyMedium" style={{marginTop:10,fontWeight:'bold',color:'#333',fontSize:13}}>PARTNER</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image style={{height:45,width:45}} source={require('../../assets/icons/deposit.png')}/>
          <Text variant="bodyMedium" style={{marginTop:10,fontWeight:'bold',color:'#333',fontSize:13}}> DEPOSIT</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image style={{height:45,width:45}} source={require('../../assets/icons/loan.png')}/>
          <Text variant="bodyMedium" style={{marginTop:10,fontWeight:'bold',color:'#333',fontSize:13}}> LOAN</Text>
        </Card.Content>
      </Card>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',       // Wraps items to the next line
    justifyContent: 'space-between', // Or use 'space-around'
    padding: 10,
    marginTop:102
  },
  card: {
    width: '31%',
    height:90,          // 3 cards per row
    marginBottom: 10,
    marginTop:10
  },
  cardContent: {
    alignItems: 'center',    // Centers items horizontally
    justifyContent: 'center', // Centers items vertically
    display: 'flex',
    backgroundColor:'#fff',
    borderRadius:10
    // Not necessary in React Native but okay
  },
});