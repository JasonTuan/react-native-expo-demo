import {Image} from 'expo-image'
import {StyleSheet} from 'react-native'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import {ThemedText} from '@/components/themed-text'
import {ThemedView} from '@/components/themed-view'
import {getUsers} from "@/db/queries"
import {useEffect, useState} from "react";
import {User} from "@/db/schema";
import {DB} from "@/db/DB";

export default function HomeScreen() {
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const result = await getUsers();
            setAllUsers(result);
        } catch (error) {
            console.error("Error can not to gets users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Thêm dữ liệu mẫu và fetch
        fetchUsers();
    }, []);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">User Table - Records</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                {(!loading && allUsers) && allUsers.map((user) => (
                    <ThemedText key={user.id}>
                        { `${user.id} - ${user.name} <${user.email}>` }
                    </ThemedText>
                ))}
            </ThemedView>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
