import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenheight = Dimensions.get('screen').height;


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

export const DetailScreen = ( {route, navigation}: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

 const {isLoading, movieFull, cast} =  useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
       <Image
            source={{uri}}
            style={styles.posterImage}
          />
       </View>

      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

        {
          isLoading
            ? <ActivityIndicator size={35} color="grey" />
            : <MovieDetails movieFull={movieFull} cast={cast} />
      }
      
      {/* Botón para regresar */}
      <View  style={styles.backButton}>
        <TouchableOpacity
         onPress={()=> navigation.pop()}
      >
          <Icon
          color='white'
          name='arrow-back-outline'
          size={60}
        
        />
      </TouchableOpacity>   
      </View>
        

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer: {

    width: '100%',
    height: screenheight * 0.65,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
     borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,

  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
   },
    posterImage : {
      flex: 1
    },
    marginContainer:{
      marginHorizontal: 20,
      marginTop: 20
    },
    subTitle: {
      fontSize: 18,
      opacity: 0.8
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold'
  },
  backButton: { 
      position: 'absolute'
    }
});