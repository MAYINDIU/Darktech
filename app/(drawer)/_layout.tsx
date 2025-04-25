import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <Drawer>
    <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'DARK TECH TEAM',
        }}
      />
      <Drawer.Screen
        name="Product" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Product',
          title: 'Products',
        }}
      />
        <Drawer.Screen
        name="About" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'About Us',
          title: 'About Us',
        }}
      />
      <Drawer.Screen
        name="Contact" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Contact Us',
          title: 'Contact Us',
        }}
      />
    </Drawer>
  </GestureHandlerRootView>
  )
}

export default _layout