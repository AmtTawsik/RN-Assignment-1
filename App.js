import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Image
            source={require('./assets/images/Oval.png')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>The Octocat</Text>
            <Text style={styles.username}>@octocat</Text>
            <Text style={styles.date}>Joined 25 Jan 2011</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Repo</Text>
            <Text style={styles.statNumber}>8</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Followers</Text>
            <Text style={styles.statNumber}>3938</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Following</Text>
            <Text style={styles.statNumber}>9</Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <View style={styles.infoContainer}>
            <Image
              source={require('./assets/images/location.png')}
              style={styles.icon}
            />
            <Text style={[styles.infoText,{marginLeft:5}]}>San Francisco</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image
              source={require('./assets/images/link.png')}
              style={styles.icon}
            />
            <Text style={styles.infoText}>https://github.blog</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image
              source={require('./assets/images/twitter.png')}
              style={styles.icon}
            />
            <Text style={[styles.infoText,{color:'#D3D3D3'}]}>Not Available</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image
              source={require('./assets/images/office.png')}
              style={styles.icon}
            />
            <Text style={styles.infoText}>@github</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 80
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 70, // adjust as needed
    height: 70, // adjust as needed
    borderRadius: 50, // for a circular image
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#5dc2fc',
  },
  date: {
    fontSize: 18,
    color: '#90A3C1',
  },
  text: {
    fontSize: 19,
    color: '#90A3C1',
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
    backgroundColor: "#F6F8FF",
    borderRadius: 5,
    paddingVertical:20
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 19,
    color: '#90A3C1',
    marginBottom:5
  },
  locationContainer: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 20,
    color: '#90A3C1',
  },
});