import React, {useEffect, useState} from 'react';
import {View, StyleSheet, useWindowDimensions, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import like from '../../assets/images/LIKE.png';
import nope from '../../assets/images/nope.png';

const ROTATION = 60; //rotacao maxima
const SWIPE_VELOCITY = 800; //se eu soltar o card antes do fim, ele tem que voltar pro meio.

const AnimatedStack = props => {
  const {data, renderItem, onSwipeRight, onSwipeLeft, setCurrentUser} = props;

  const [currentIndex, setCurrentIndex] = useState(0); //card atual
  const [nextIndex, setNextIndex] = useState(currentIndex + 1); //proximo cad
  const currentProfile = data[currentIndex]; //valor do cad atual
  const nextProfile = data[nextIndex]; //valor do proximo card

  const {width: screenWidth} = useWindowDimensions(); //variavel screenwitdh pra pegar o tamanho da tela
  const hiddenTranslateX = 2 * screenWidth; //queremos que o card desapareca da tela

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg', //qnd ta na esquerda -60deg qnd no meio 0 e qnd direta 60dg
  );

  //interpolate = valor de entrada (0 = meio ate o tamanho da tela), valo de saida (meio ate a rotacao), e o tipo (deg).

  // hiddenTranslateX = direita
  // -hiddenTranslateX = esquerda

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  // vai colocar o card de atras com uma animacao como se quissese pular pra tela

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.5, 1], //1 = ele pula pra tras. 0.8 = pula pra frente da tela.
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX], //-hiddenTranslateX (esquerda), 0 (meio), hiddenTranslateX (direita)
      [1, 0.6, 1], //1 = ele pula pra tras. 0.8 = pula pra frente da tela.
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX], [0.3, 10]),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX], [0.3, 10]),
  }));

  const onSwipeLeftRight = (args, isRight) => {
    const onSwipe = isRight ? onSwipeRight : onSwipeLeft; //determinar qual func chamar depend do lado
    onSwipe(args);
  };

  const gestureHandler = useAnimatedGestureHandler({
    //sempre que iniciar o evento de touch
    onStart: (_, context) => {
      context.startX = translateX.value;
    },

    //sempre que estiver ativo
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX; //vai lembrar do movimento de start no clique. depois disso add a distancia do mouse a distancia inicial.
    },

    //sempre que o evento acabar
    onEnd: event => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        //se eu soltar o card antes desse valor, ele tem que voltar pro meio.
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(
        // event.velocityX > 0 ? hiddenTranslateX : -hiddenTranslateX,
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1), //sempre que a animacao acabar podemos chmaar o index
      );
      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)();
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]); //vai ser chamado toda vez que o current index muda

  useEffect(() => {
    setCurrentUser(currentProfile);
  }, [currentProfile, setCurrentUser]);

  return (
    //card atras
    <View style={styles.root}>
      {/* se o next profile nao for null entao ele roda o animate */}
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            {renderItem({item: nextProfile})}
          </Animated.View>
        </View>
      )}

      {currentProfile ? (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Animated.Image
              source={like}
              style={[styles.like, {left: 10}, likeStyle]}
              resizeMode="contain"
            />
            <Animated.Image
              source={nope}
              style={[styles.like, {right: 10}, nopeStyle]}
              resizeMode="contain"
            />
            {renderItem({item: currentProfile})}
          </Animated.View>
        </PanGestureHandler>
      ) : (
        <View>
          <Text>No more users.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  animatedCard: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 10,
    zIndex: 1,
    elevation: 1,
  },
});

export default AnimatedStack;
