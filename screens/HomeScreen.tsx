import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import colors from "../constants/colors";
import { Avatar, Button, ButtonGroup, Card, Layout, MenuGroup, ViewPager, Text as KText } from "@ui-kitten/components";
import tshirt from "../assets/images/tshirt.jpeg";
import avatar from "../assets/images/avatar.png";
import shirt from "../assets/images/shirt.jpg";
import sweater from "../assets/images/sweater.jpg";
import jacket from "../assets/images/jacket.jpg";
import shoe from "../assets/images/shoe.jpg";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as FeatherIcon from "react-native-vector-icons/Feather";
import filterList from "../constants/filterList";
import Badge from "../UI/Badge";
import User from "../components/User";
import items from "../constants/items";
import FilterSelector from "../components/FilterSelector";

export default function HomeScreen(): JSX.Element {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator style={styles.itemScrollContainer}>
        <FilterSelector />
        {/* <ScrollView style={styles.itemsSliderContainer} horizontal>
          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shirt} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shoe} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={jacket} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={tshirt} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shirt} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shirt} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shirt} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

          <Layout
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shirt} />
              <View style={styles.badgeContainer}>
                <Badge title="ጃኬት" />
                <Badge title="ጃኬት" />
              </View>
            </Layout>
          </Layout>

        </ScrollView> */}
        {/* <ViewPager
          style={{}}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>

          <Layout
            style={styles.tab}
            level='2'>
            <Layout style={styles.sliderItemImageContainer}>
              <Image style={styles.sliderItemImage} source={shirt} />
            </Layout>            
          </Layout>

          <Layout
            style={styles.tab}
            level='2'>
            <KText category='h5'>ORDERS</KText>
          </Layout>
          <Layout
            style={styles.tab}
            level='2'>
            <KText category='h5'>TRANSACTIONS</KText>
          </Layout>
        </ViewPager> */}

        {
          items.map((item, idx) => {
            return <Layout style={styles.itemContainerCard}>
              <Layout style={styles.itemContainerLayout}>

                <User avatar={avatar} name={item.owner} />

                <Layout style={styles.itemImageContainer}>
                  <Image style={styles.itemImage} source={item.image} />
                </Layout>

                <View style={styles.badgeContainer}>
                  {item.labels.map((label) => {
                    return <Badge title={label} />
                  })}
                </View>

                <Text style={styles.itemTitleText}>{item.title}</Text>

                <Layout style={{ display: "flex", flexDirection: "row", alignContent: "space-between" }}>
                  <ButtonGroup appearance="ghost" size="small" style={{ display: "flex", justifyContent: "space-between", marginTop: 10, width: "100%" }}>
                    <Button appearance="ghost">
                      {() =>
                        <>
                          <Layout style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                            <Icon size={17} name="heart-outline" />
                          </Layout>
                        </>}
                    </Button>
                    {/* <Button appearance="ghost">
            {() => <Icon size={17} name="comment" />}
          </Button> */}
                    <Button
                      accessoryRight={<Icon size={15} name="message-outline" />}
                      appearance="outline"
                      size="giant"
                    >
                      ለመለወጥ
                    </Button>
                  </ButtonGroup>
                </Layout>
              </Layout>
            </Layout>
          })
        }


      </ScrollView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  itemScrollContainer: {
    backgroundColor: colors.secondaryLight,
    height: "90%"
  },

  itemTitleText: {
    fontFamily: "shiromeda",
    letterSpacing: -1,
    color: colors.secondaryDark
  },

  itemContainerCard: {
    elevation: 0,
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 20
  },

  itemContainerLayout: {
    flex: 1, flexDirection: "column"
  },

  itemImageContainer: {
    height: 200,
    width: "100%"
  },

  itemImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },

  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  sliderItemImageContainer: {
    width: 150,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10
  },

  sliderItemImage: {
    height: 130,
    width: 130,
    resizeMode: "contain"
  },

  itemsSliderContainer: {
    width: "100%",
    height: 200
  }
})