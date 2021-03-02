import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"

const AddItem = ({ addItem }) => {

    const [text, setText] = useState("");

    const onChange = textValue => setText(textValue);

    const handleOnAddbuttonPress = () => {
        if (!text) {
            Alert.alert("Error !", "Please input your book name.", { text: "OK" })
        } else {
            addItem(text)
        }
    }

    return (
        <View>
            <TextInput placeholder="+ Add Books..." style={styles.input}
                onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => handleOnAddbuttonPress()}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "darkblue",
        padding: 9,
        margin: 5
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
})

export default AddItem;