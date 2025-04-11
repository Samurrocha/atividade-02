import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>
          LUGARES PARA VIAJAR EM 2026
        </Text>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/san_francisco.png')}
          />
          <Text style={styles.textDescription}>
            São Francisco é uma cidade vibrante e icônica localizada no norte da Califórnia, famosa por sua rica história, arquitetura impressionante e cultura diversa.
            Um dos marcos mais conhecidos é a Ponte Golden Gate, uma maravilha arquitetônica que atravessa o estreito de Golden Gate, oferecendo vistas deslumbrantes da baía.
            A paisagem montanhosa da cidade proporciona panoramas incríveis, especialmente em locais como Twin Peaks.
            Outro destino imperdível é a Ilha de Alcatraz, lar da famosa prisão que já foi um centro de detenção.
            Os visitantes podem pegar um ferry e fazer um tour pela ilha, conhecendo sua fascinante história.
            O Fisherman’s Wharf, uma área movimentada à beira-mar, é famosa por seus frutos do mar, navios históricos e os leões-marinhos que descansam nos cais.
            Os bairros coloridos, como Chinatown e o Mission District, oferecem experiências culturais únicas, desde a culinária autêntica até a arte de rua vibrante.
            Não deixe de andar pelos famosos bondes, que sobem as colinas íngremes da cidade e oferecem uma maneira divertida de explorar as ruas cênicas de São Francisco.
            Com sua combinação de beleza natural, história rica e charme moderno, São Francisco oferece algo para todos os tipos de viajantes.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/quebec.png')}
          />
          <Text style={styles.textDescription}>
            Quebec é uma cidade encantadora e histórica localizada na província de Quebec, no Canadá. Conhecida por sua rica herança francesa, Quebec é uma das cidades mais antigas da América do Norte e oferece uma combinação única de charme europeu e cultura canadense.
            A parte mais famosa da cidade é o Vieux-Québec (Velho Quebec), um bairro histórico que foi declarado Patrimônio Mundial da Humanidade pela UNESCO. Suas ruas de paralelepípedos, edifícios coloniais e muralhas imponentes transportam os visitantes para o passado, criando uma atmosfera mágica. No topo da colina, encontra-se o Château Frontenac, um icônico hotel que é um dos edifícios mais fotografados do mundo.
            Quebec também é famosa pela sua vibrante cena cultural, com museus, galerias de arte e teatros. O Carnaval de Quebec, realizado anualmente no inverno, é um dos maiores e mais famosos do mundo, oferecendo desfiles, festas e diversas atividades ao ar livre, como corrida de trenó e esculturas de gelo.
            Além de sua história e cultura, a cidade também é conhecida por sua culinária, com pratos tradicionais como poutine, torta de carne e maple syrup (xarope de bordo), que são destaque em muitos restaurantes locais.
            Com suas paisagens encantadoras, arquitetura histórica e cultura vibrante, Quebec é um destino imperdível para quem deseja explorar a riqueza do Canadá francófono.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/victoria.png')}
          />
          <Text style={styles.textDescription}>
            Victoria é um estado localizado no sudeste da Austrália, conhecido por sua diversidade de paisagens, desde praias deslumbrantes até montanhas e florestas exuberantes. A capital de Victoria é Melbourne, uma das cidades mais cosmopolitas e culturais do país, famosa por sua cena artística, restaurantes de classe mundial, lojas independentes e eventos esportivos de destaque, como o Australian Open de tênis.
            Fora da cidade, o estado de Victoria oferece uma infinidade de atrações naturais e culturais. O Great Ocean Road, uma das rotas costeiras mais espetaculares do mundo, serpenteia ao longo do litoral e oferece vistas incríveis do oceano, além de atrações como os Doze Apóstolos, formações rochosas impressionantes que emergem do mar.
            A região de Yarra Valley é famosa por suas vinícolas e paisagens montanhosas, oferecendo aos visitantes a chance de degustar alguns dos melhores vinhos da Austrália. Para quem aprecia atividades ao ar livre, o Parque Nacional Grampians é um local popular para caminhadas e aventuras na natureza, com belas paisagens e vida selvagem local.
            Victoria também é conhecida por suas cidades menores e encantadoras, como Ballarat e Bendigo, que oferecem uma imersão na história da corrida do ouro da Austrália, além de museus e arquitetura vitoriana.
            Seja explorando Melbourne ou desfrutando das belezas naturais do estado, Victoria oferece uma experiência diversificada e inesquecível para os visitantes.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/paris.png')}
          />
          <Text style={styles.textDescription}>
            Paris é a capital da França, conhecida mundialmente como a "Cidade Luz". A Torre Eiffel, um dos monumentos mais icônicos do mundo, oferece vistas panorâmicas da cidade e é um símbolo do romantismo e da elegância parisiense.
            O Museu do Louvre, lar da Mona Lisa e de muitas outras obras-primas, é um paraíso para os amantes da arte.
            A Catedral de Notre-Dame, com sua arquitetura gótica impressionante, e o Arco do Triunfo, que marca a história militar da França, são pontos turísticos essenciais.
            A Champs-Élysées é uma das avenidas mais famosas do mundo, oferecendo lojas de luxo e cafés ao longo de sua extensão.
            O bairro de Montmartre, com suas ruas charmosas e o icônico Sacré-Cœur, oferece uma experiência boêmia, enquanto o Rio Sena adiciona um toque mágico à cidade.
            Paris é também um centro gastronômico, com suas boulangeries e restaurantes sofisticados. Não importa o que você procure, Paris sempre tem algo especial a oferecer.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/toquio.png')}
          />
          <Text style={styles.textDescription}>
            Tóquio é uma cidade dinâmica e futurista que combina tradição e inovação de maneira única. O Templo Senso-ji, em Asakusa, é um dos maiores e mais antigos templos budistas do Japão, oferecendo um vislumbre da cultura tradicional japonesa.
            O Palácio Imperial, localizado no coração da cidade, é rodeado por belos jardins e reflete a história e a importância da monarquia no Japão.
            Tóquio é também famosa por seus bairros vibrantes, como Shibuya, onde você pode testemunhar o famoso cruzamento de pedestres, e Shinjuku, repleto de lojas, restaurantes e vida noturna agitada.
            Akihabara é o paraíso para os fãs de eletrônicos e cultura pop, enquanto o Parque Ueno oferece museus e tranquilidade em meio ao ritmo acelerado da cidade.
            A culinária de Tóquio é mundialmente renomada, com sushi fresco e ramen delicioso disponíveis em toda a cidade. Tóquio é um lugar onde o antigo e o novo coexistem de forma fascinante.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/rio_de_janeiro.png')}
          />
          <Text style={styles.textDescription}>
            O Rio de Janeiro é uma das cidades mais vibrantes e icônicas do Brasil, famosa por suas praias deslumbrantes, como Copacabana e Ipanema. O Cristo Redentor, uma das Novas Sete Maravilhas do Mundo, oferece uma vista panorâmica incrível da cidade e é um símbolo do Rio.
            O Pão de Açúcar, com seu bondinho e vistas espetaculares, é outro ponto turístico imperdível, oferecendo uma das vistas mais bonitas do mundo.
            A cidade também é conhecida pelo Carnaval, uma celebração de música, dança e cores, atraindo milhares de turistas de todo o mundo.
            Os bairros como Santa Teresa e Lapa são famosos por sua vida boêmia e cultura artística, com bares, restaurantes e música ao vivo.
            O Rio é uma cidade de contrastes, onde a natureza exuberante e a vida urbana se encontram de maneira única, criando uma experiência inesquecível para os visitantes.
          </Text>
        </View>




      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  title: {
    textShadowColor: "red",
    textShadowOffset: { width: 0, height: 50 },
    textShadowRadius: 50,
    color: "white",
    fontSize: 50,
    fontStyle: "italic"
  },

  car: {
    maxWidth: "39%",
    margin: "5%",
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  textDescription: {
    flexWrap: "wrap",
    width: '100%',
    textAlign: "left",
    padding: "0.5%",
    color: "white",
    fontStyle: 'italic'
  },

  places: {
    width: "100%"
  }


});
