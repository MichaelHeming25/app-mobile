import React from 'react';
import { Text } from 'react-native';
import WebView from 'react-native-webview';

const Detail = ({ route }) => {
    return (
        <WebView source={{ uri: route.params.user.github }} />
    )
}

export default Detail;