import {Alert, Button, StyleSheet, TextInput, View} from 'react-native'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import {ThemedText} from '@/components/themed-text'
import {ThemedView} from '@/components/themed-view'
import {IconSymbol} from '@/components/ui/icon-symbol'
import {Fonts} from '@/constants/theme'
import {useState} from "react"
import {createUser} from "@/db/queries"

export default function TabTwoScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const handleAddUser = async () => {
        if (!name || !email) {
            Alert.alert("Error", "Name, Email and Age are required.")
            return
        }
        try {
            await createUser(name, email, parseInt(age, 10));

            setName('');
            setEmail('');
            setAge('18')

            Alert.alert("Success", "Added successfully.");

        } catch (error) {
            console.error("Lỗi khi thêm người dùng:", error);
            Alert.alert("Error", "Can not add user.");
        }
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText
                    type="title"
                    style={{
                        fontFamily: Fonts.rounded,
                    }}>
                    Add User
                </ThemedText>
            </ThemedView>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Full name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={age}
                    onChangeText={setAge}
                />
                <Button title="Add User" onPress={handleAddUser}/>
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    formContainer: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});
