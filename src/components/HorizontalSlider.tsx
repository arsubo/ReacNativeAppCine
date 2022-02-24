import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props{
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{        
        height: (title) ? 200 : 180
        }}>
        {
            title &&  <Text style={{fontSize: 20, fontWeight:'bold', marginLeft: 10}}>{title}</Text>
        }           
            <FlatList 
              data={movies}
              renderItem={({item}: any) => (
              <MoviePoster movie={item} height={165} width={130}/> 
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        </View>         
    
  )
}
