import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type DownloadItem = {
  id: string;
  title: string;
  artist: string;
  timestamp: Date;
  status: 'completed' | 'failed';
};

type Props = {
  downloads: DownloadItem[];
};

const DownloadHistory: React.FC<Props> = ({ downloads }) => {
  return (
    <ScrollView className="flex-1">
      {downloads.map((item) => (
        <View 
          key={item.id} 
          className="flex-row items-center p-4 bg-gray-800 mb-2 rounded-lg"
        >
          <View className="mr-4">
            <Ionicons 
              name={item.status === 'completed' ? 'checkmark-circle' : 'alert-circle'} 
              size={24} 
              color={item.status === 'completed' ? '#10B981' : '#EF4444'} 
            />
          </View>
          
          <View className="flex-1">
            <Text className="text-white font-bold">{item.title}</Text>
            <Text className="text-gray-400">{item.artist}</Text>
            <Text className="text-gray-500 text-sm">
              {item.timestamp.toLocaleDateString()}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default DownloadHistory; 