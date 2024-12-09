import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    

    <View className='items-center flex-1 justify-center gap-3'>
      <Text className='text-black font-bold text-xl '>{title}:</Text>

      <View className='gap-3'>
        <EditScreenInfo path={path} />
        {children}
      </View>
    </View>
  );
};