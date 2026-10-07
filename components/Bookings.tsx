import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import styles from "./Styles";

export default function Booking() {
  return (
    <View style={styles.bookingPage}>
      /*header*/
      <View style={styles.bookingHeader}>
        <Text style={styles.bookingHeaderText}>Bookings</Text>
      </View>

      <ScrollView
        style={styles.bookingScroll}
        contentContainerStyle={styles.bookingScrollContent}
      >
        <View style={styles.bookingSelection}>
          <Image
            source={require("../_images/booking1.png")}
            style={styles.bookingImage}
            resizeMode="contain"
          />

          <Text style={styles.bookingNumber}>1</Text>

          <Text style={styles.bookingTitle}>
            Complete and Submit
            {"\n"}Membership Form
          </Text>

          <Text style={styles.bookingDescription}>
            Go to the Membership page and complete and
            {"\n"}submit the membership form.
          </Text>
        </View>

        /* Booking 2 */
        <View style={styles.bookingSelection}>
      
          /* Image 2 */
          <Image
            source={require("../_images/booking2.png")}
            style={styles.bookingImage}
            resizeMode="contain"
          />

          <Text style={styles.bookingNumber}>2</Text>

          <Text style={styles.bookingTitle}>
            Choose your Mog and
            {"\n"}Make
          </Text>

          <Text style={styles.bookingDescription}>
            Choose your Mog from the list of available
            {"\n"}animals you want to adopt.
          </Text>
        </View>

        {/* Booking 3 */}
        <View style={styles.bookingSelection}>
          {/* Image 3 */}
          <Image
            source={require("../_images/booking3.png")}
            style={styles.bookingImage}
            resizeMode="contain"
          />

          <Text style={styles.bookingNumber}>3</Text>

          <Text style={styles.bookingTitle}>Collect your Mog</Text>

          <Text style={styles.bookingDescription}>
            Make suitable arrangements to collect your
            {"\n"}Mog from the Mog Hub depot.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
