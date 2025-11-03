import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {Stack} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import 'react-native-reanimated'

import {useColorScheme} from '@/hooks/use-color-scheme'
import {useDrizzleStudio} from "expo-drizzle-studio-plugin"
import {DB, expoDB} from "@/db/DB"
import {useMigrations} from "drizzle-orm/op-sqlite/migrator"
import migrations from "@/db/migrations/migrations"

export const unstable_settings = {
    anchor: '(tabs)',
}

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const {success, error} = useMigrations(DB, migrations)
    useDrizzleStudio(expoDB);

    if (error) {
        throw new Error(`Migration failed: ${error.message}`)
    }
    if (!success) {
        console.info('Migration is in progress...')
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="modal" options={{presentation: 'modal', title: 'Modal'}}/>
            </Stack>
            <StatusBar style="auto"/>
        </ThemeProvider>
    )
}
