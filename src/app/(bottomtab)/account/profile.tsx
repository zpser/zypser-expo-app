import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { COLORS } from "@/util/constant/colors";
import { SafeAreaView } from "@/components/core/safe-area-view";
import ProfileHeader from "@/components/account/profile/ProfileHeader";
import ProfileSection from "@/components/account/profile/ProfileSection";
import { ACCOUNT_PROFILE } from "@/assets/data/account";
import { router, type Href } from "expo-router";

const Profile = () => {
  const { user, sections, appInfo } = ACCOUNT_PROFILE;

  return (
    <SafeAreaView className="flex-1 bg-allStone" paddingX={0}>
      <ProfileHeader
        firstName={user.firstName}
        lastName={user.lastName}
        memberSince={user.memberSince}
        avatarUrl={user.avatarUrl}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 300,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 48,
          borderTopRightRadius: 48,
          paddingTop: 20,
          borderWidth: 1,
          borderColor: `${COLORS.primary}24`,
        }}
      >
        {sections.map((section, index) => (
          <ProfileSection
            key={`${section.title}-${index}`}
            title={section.title}
            items={section.items.map((item) => ({
              ...item,
              onPress: () => {
                if (item.route) router.push(item.route as Href<string>);
              },
            }))}
          />
        ))}

        <View className="px-5 mb-6">
          <TouchableOpacity
            className="bg-white border border-primaryButton rounded-full py-3 items-center"
            onPress={() => console.log("Log out pressed")}
          >
            <Text variant="body" className="font-semibold text-primaryButton">
              Log out Zypser
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mb-8">
          <Text variant="heading" className="text-primaryText mb-1">
            <Text className="text-primaryButton">{appInfo.name}</Text>{" "}
            {appInfo.role}
          </Text>
          <Text variant="caption1" className="text-secondaryText">
            {appInfo.version}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
