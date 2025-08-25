import { Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Text } from '@/components/core/text';
import { ExternalLink } from '@/components/core/external-link';

export default function ModalScreen() {
  const { colorScheme } = useColorScheme();
  return (
    <>
      <View className="px-4 pt-5">
        <Text variant="largeTitle">Modal</Text>
        <ExternalLink
          className="pt-2"
          href="https://github.com/justlaunch-app/expo-router-starter-kit"
        >
          <Text variant="body">
            Hello
          </Text>
        </ExternalLink>
      </View>
    </>
  );
}
