
import React, { useEffect, memo } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../../store/post';
import { RootState } from '../../store/reducers';
import { Text, SafeAreaView, ScrollView } from 'react-native';

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
    "post": rootState.post.title
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  //console.log(`Post`, state.post);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#008F7A" }}>
        <Wrapper>
          {state.post.slice(0, 10).map((i, index) =>
            <Content key={index}>{i}</Content>)}
        </Wrapper>
      </ScrollView>
    </SafeAreaView>


  );
});

