
import React, { useEffect, memo } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDatas } from '../../store/cats';
import { RootState } from '../../store/reducers';
import { Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import Button from '../../components/button'
const Wrapper = styled.View`
margin-top:100px;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
`;
const Content = styled.Text`
color:  #fff;
`;


export default memo(() => {
  const state = useSelector((rootState: RootState) => ({
    "cats": rootState.cat.cats
  }));

  const dispatch = useDispatch();

  console.log(state.cats);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#845EC2" }}>
        <Wrapper>
          {state.cats.map((i) =>
            <View key={i.id} style={{ "display": `inline-flex` }}>
              <Content>{i.name}</Content>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: `https://robohash.org/${i.id}?set=set4&size=100x100` }}
              />
            </View>)}
          <Button onPress={() =>
            dispatch(fetchDatas())} size="large" appearance="primary">click</Button>
        </Wrapper>
      </ScrollView>
    </SafeAreaView >

  );
});

