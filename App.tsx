/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {GraphQLClient, gql} from 'graphql-request';
import axios from 'axios';
import { RequestDocument } from 'graphql-request/dist/types';
// import admin_secret from '/config.json';


const certificate = (user, context, callback) => {
  const hasura_config = require('./config.json');
  const url : string = hasura_config.url;
  const admin_secret = hasura_config.admin_secret;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      'content-type' : 'application/json',
      'x-hasura-admin-secret' : admin_secret,
    },
  })
  const query  = gql `{
    users {
      id
      name
      created_at
      last_seen
    }
  }`;
  graphQLClient.request(query).then((data) =>
    console.log(JSON.stringify(data, null, 2))
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <Text>hi my name is haklim</Text>
      <TouchableOpacity
        onPress = {certificate}>
        <Text>button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
