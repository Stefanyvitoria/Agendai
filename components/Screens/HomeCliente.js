import React, {PureComponent} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ListItem,
} from 'react-native';

export default class HomeCliente extends PureComponent {
  render() {
    let {
      container,
      cardText,
      card,
      cardImage,
      servicesScroll,
      categoriesScroll,
    } = styles;

    return (
      <View style = {styles.container}>
        <View style={categoriesScroll}>
          <FlatList
            horizontal
            data={state.serviceList}
            renderItem={({item}) => (
              <TouchableOpacity key={item.title}>
                <Image
                  style={cardImage}
                  source={{
                    uri: 'https://img.freepik.com/vetores-premium/homem-com-logotipo-de-icone-barbudo-e-barbearia_66757-249.jpg',
                  }}
                />
                <View>
                  <Text style={{padding: 5, alignSelf: 'center'}}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.title}
          />
        </View>
        <Text style={styles.textDisplay}>Promoções para você</Text>

        <View style={styles.promotionsScroll}>
          <FlatList
            horizontal
            data={state.serviceList}
            renderItem={({item}) => (
              <TouchableOpacity key={item.title}>
                <Image
                  style={cardImage}
                  source={{
                    uri: 'https://img.freepik.com/vetores-premium/homem-com-logotipo-de-icone-barbudo-e-barbearia_66757-249.jpg',
                  }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.title}
          />
        </View>
        <Text style={styles.textDisplay}>Estabelecimentos recomendados</Text>
        <View style={servicesScroll}>
          <FlatList
            data={state.serviceList}
            renderItem={({item}) => (
              <TouchableOpacity style={card} key={item.title}>
                <Image
                  style={cardImage}
                  source={{
                    uri: 'https://img.freepik.com/vetores-premium/homem-com-logotipo-de-icone-barbudo-e-barbearia_66757-249.jpg',
                  }}
                />
                <View>
                  <Text style={cardText}>{item.title}</Text>
                  <Text style={cardText}>Barbearia</Text>
                  <Text style={cardText}>R$ 10,00 - 20,00</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex:1
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    borderRadius: 15,
    overflow: 'hidden',
    display: 'flex',
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'cover',
    margin: 5,
  },
  servicesScroll: {
  },
  categoriesScroll: {
  },
  promotionsScroll: {
  },
  textDisplay: {
    padding: 10,
    fontFamily: 'Fredoka',
    color: '#336699',
    fontWeight: '500',
  },
});

const state = {
  displayList: true,
  serviceList: [
    {title: 'Barbearia X', description: 'Compre nossos serviços!'},
    {title: 'Barbearia Y', description: 'Compre nossos serviços!'},
    {title: 'Barbearia Z', description: 'Compre nossos serviços!'},
    {title: 'Barbearia W', description: 'Compre nossos serviços!'},
    {title: 'Barbearia P', description: 'Compre nossos serviços!'},
    {title: 'Barbearia Q', description: 'Compre nossos serviços!'},
  ],
  searchServiceList: [],
};
