import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';

const CustomDrawerContent = (props:any) => {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            // Your logout logic goes here
            // Example: clearing token, navigating to login screen
            router.push('/'); // Navigate to login page
          },
        },
      ]
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerLabel: 'HOME',
            title: 'DARK TECH TEAM',
          }}
        />
        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: 'About Us',
            title: 'About Us',
          }}
        />
        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: 'Contact Us',
            title: 'Contact Us',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
