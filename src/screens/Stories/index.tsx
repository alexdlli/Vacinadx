import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Stories: React.FC = () => {
  const { params } = useRoute<StoriesHomeStackRouteProps>();
  console.log(params.profile);
  return <View style={{ flex: 1, backgroundColor: 'yellow' }} />;
};

export default Stories;
