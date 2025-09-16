import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/core/text";
import { LucideIcon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface ServiceFAQsProps {
  faqs: FAQ[];
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ faqs }) => {
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(faqId)) {
        newSet.delete(faqId);
      } else {
        newSet.add(faqId);
      }
      return newSet;
    });
  };

  return (
    <View className="mb-6 mx-2">
      {/* Section Title */}
      <View className="px-4 pb-2">
        <Text
          variant="title3"
          className="font-semibold"
          style={{ color: COLORS.primaryText }}
        >
          FAQs
        </Text>
      </View>

      {/* FAQ Items */}
      {faqs.map((faq) => {
        const isExpanded = expandedFAQs.has(faq.id);

        return (
          <View key={faq.id} className="px-4 py-1">
            <TouchableOpacity
              onPress={() => toggleFAQ(faq.id)}
              className="flex-row items-center justify-between py-3"
              activeOpacity={0.7}
            >
              <Text
                variant="callout"
                className="flex-1 pr-4 font-medium"
                style={{ color: COLORS.primaryText }}
              >
                {faq.question}
              </Text>
              <LucideIcon
                name={isExpanded ? "ChevronUp" : "ChevronDown"}
                size={20}
                color={COLORS.primaryText}
              />
            </TouchableOpacity>

            {isExpanded && (
              <View className="pb-3 pl-0">
                <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
                  {faq.answer}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default ServiceFAQs;
