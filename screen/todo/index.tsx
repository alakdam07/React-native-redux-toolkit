
import React, { useEffect, memo } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../../store/post';
import { RootState } from '../../store/reducers';
import { Text, SafeAreaView, ScrollView, TextInput } from 'react-native';

const Wrapper = styled.View`
margin-top:100px;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
`;
const Content = styled.Text`
color:  white;
`;

export default memo(() => {
  const state = useSelector((rootState: RootState) => ({
    "post": rootState.post.title
  }));
  const [value, onChangeText] = React.useState('');
  //console.log(`Post`, state.post);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#4B4453" }}>
        <Wrapper>
          <Content>{value}</Content>
          <TextInput
            style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, color: "#fff" }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </Wrapper>
      </ScrollView>
    </SafeAreaView>


  );
});

