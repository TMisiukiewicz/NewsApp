import React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';

interface NewsTileProps {
  title: string;
  abstract: string;
  url: string;
  image: string | undefined;
}

const NewsTile: React.FC<NewsTileProps> = ({title, abstract, url, image}) => {
  const openArticle = async () => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <Card style={{marginBottom: 15}} mode="contained">
      <Card.Content>
        <Card.Cover source={{uri: image}} style={{marginBottom: 5}} />
        <Text variant="titleMedium">{title}</Text>
        <Text variant="bodySmall">{abstract}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={openArticle}>
          Read
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default NewsTile;
