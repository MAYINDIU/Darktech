import { Image, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'
import { Link } from 'expo-router'
import { useAllUserQuery } from '@/redux/userSlice'

const index = () => {

const {data}=useAllUserQuery(undefined,{refetchOnFocus:true,refetchOnMountOrArgChange:true});
 
// console.log(data)
   
  return (
     <View style={{padding:10,justifyContent:'center' ,display:'flex',height:'100%',width:'100%'}}>
           
           <Image style={{height:250,width:'100%'}} source={require('../assets/images/login.jpg')}/>
                <Card style={{borderRadius:15}}>

                    <Card.Content style={{backgroundColor:'#fff',padding:0}}>
                    <TextInput
                    mode="outlined"
                    label="Enter User ID"
                    right={<TextInput.Affix text="/100" />}
                    />
                <TextInput
                    mode="outlined"
                    label="Enter Password"
                    secureTextEntry
                    right={<TextInput.Affix text="/100" />}
                    />
                    <Link asChild href={'/(drawer)/Dashboard'}>
                <Button  style={{marginTop:10,backgroundColor:'#1976D2'}} mode="contained" >
                Login
                </Button>
                </Link>

    </Card.Content>



  </Card>
     </View>
    
  )
}

export default index