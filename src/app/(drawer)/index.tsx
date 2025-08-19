import HistoryButton from "@/components/HistoryButton";
import { Link } from "expo-router";
import { BanknoteArrowDownIcon, HandCoinsIcon, MapPinIcon, PenLineIcon, PhoneCallIcon, ShoppingBasket, User2Icon, UserCircle2Icon, UserIcon, WrenchIcon } from "lucide-react-native";
import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View className="bg-solar-blue-primary">
      {/* <Animated.View
       entering={SlideInRight.duration(500)}
      exiting={SlideOutLeft.duration(500)}
       style={{
         width: '100%',
         height: '100%',
         backgroundColor: 'white',
       }}
     > */}
      <ScrollView className="pb-20">
        <View className="w-full my-2 border-y-2 border-y-solar-blue-secondary/20">
          <Image source={require("@/assets/images/test-slide.png")} className="h-[384px] w-[384px] bg-cover bg-top" />
        </View>

        <View className="bg-white rounded-t-3xl pb-10">
          <View className="flex-row flex-wrap items-start justify-start gap-4 p-4">

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<ShoppingBasket size={45} color={'#0d3b85'} />}
              label="Comprar"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<PenLineIcon size={45} color={'#0d3b85'} />}
              label="Assinar doc."
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<HandCoinsIcon size={45} color={'#0d3b85'} />}
              label="Pagamentos"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<BanknoteArrowDownIcon size={45} color={'#0d3b85'} />}
              label="Cashback"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<MapPinIcon size={45} color={'#0d3b85'} />}
              label="Lojas"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<WrenchIcon size={45} color={'#0d3b85'} />}
              label="Assistência"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<PhoneCallIcon size={45} color={'#0d3b85'} />}
              label="Fale conosco"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<PhoneCallIcon size={45} color={'#0d3b85'} />}
              label="Fale conosco"
              url={'/'}
            />

            <HistoryButton
              bgButton="bg-solar-green-primary"
              colorText="text-solar-blue-secundary"
              icon={<PhoneCallIcon size={45} color={'#0d3b85'} />}
              label="2ª via boleto"
              url={'/'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home