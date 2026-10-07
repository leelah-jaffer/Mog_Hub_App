import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 350,
    paddingTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  mainTxt: {
    paddingTop: 50,
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },

  slogan: {
    color: "orange",
    fontSize: 30,
    textAlign: "center",
  },

  inputFlex: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-evenly",
  },

  enterTxt: {
    fontWeight: "bold",
  },

  userInputTxt: {
    borderBottomWidth: 1,
  },

  radioContainer: {
    flex: 0,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },

  radioGroup: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  radioButton: {
    flexDirection: "column",
    alignContent: "center",
  },

  radioLabel: {
    marginLeft: 5,
    fontSize: 15,
    color: "black",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#7ad1f3",
  },

  petContainer: {
    flex: 5,
  },

  petTxt: {
    fontSize: 15,
    marginVertical: 5,
    borderBlockColor: "black",
    borderBottomWidth: 1,
  },

  bookingPage: {
    flex: 1,
    backgroundColor: "#f3f4ef",
  },

  bookingHeader: {
    height: 62,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingHorizontal: 18,
    borderBottomWidth: 3,
    borderBottomColor: "#f4a261",
  },

  bookingHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#f4a261",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  bookingScroll: {
    flex: 1,
  },

  bookingScrollContent: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 30,
  },

  bookingSelection: {
    backgroundColor: "#f8d98b",
    marginBottom: 18,
    paddingHorizontal: 18,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 2,
  },

  bookingImage: {
    width: 120,
    height: 100,
    marginBottom: 8,
  },

  bookingNumber: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#f28c28",
    marginBottom: 8,
  },

  bookingTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 8,
  },

  bookingDescription: {
    fontSize: 11,
    color: "#333333",
    textAlign: "center",
    lineHeight: 16,
  },
});

export default styles;
