import { View, Text, ActivityIndicator, Modal } from 'react-native';

const LoadingPopup = ({ visible, message }: { visible: boolean, message: string }) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/30">
        <View className="bg-white px-6 py-4 rounded-lg items-center shadow-lg flex flex-row w-[70%]">
          <ActivityIndicator size="large" color="#000" />
          <Text className="ml-5 text-base text-black">{message}...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingPopup;
