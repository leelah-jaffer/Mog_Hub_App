import {StatusBar} from 'expo-status-bar'
import {useState} from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, TextInput} from 'react-native';
import styles from '../components/Styles';
import {RadioButton} from 'react-native-paper';



function MainScreen (){
     const [petName, setPetName] = useState('');
    const [pet, setPet] = useState<string[]>([]);
    const [selectedValue, setSelectedValue] = useState('0');

     const renderPets = () => {
        const arrDisplay = [];

        for(let i = 0; i < pet.length; i++){
            arrDisplay.push(
                <View key={i} style={styles.inputContainer}>
                    <Text style={styles.petTxt}>
                        {pet[i]}
                    </Text>
                </View>
            );
        }

        return arrDisplay;
    }

                 

    
    return(
        <View>
            <SafeAreaView>
                <ScrollView>
                     <Image style={styles.logo}
                     source={require('../_images/logo.jpg')}/>

                     <Text style={styles.mainTxt}>Mog Hub</Text>
                     <Text style={styles.slogan}>P u r r f e c t  C o m p a n i o n s</Text>

                     <View style={styles.inputFlex}>
                        <Text style={styles.enterTxt}>Your Pet's Name:</Text>
                        <TextInput style={styles.userInputTxt}
                            placeholder='Saidee'
                             value={petName}
                             onChangeText={newText => setPetName(newText)}
                        />
                     </View>

                 <View style={styles.radioContainer}>
                    <View style={styles.radioGroup}>
                        <View style={styles.radioButton}>
                            <RadioButton.Android
                            value="1"
                            status={selectedValue == "1" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('1')}
                              color="orange"

                            />  
                            
                       </View>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'orange'}}>
                        Select Your Pet:
                    </Text>

                    <View style={styles.radioContainer}>
                        <View style={styles.radioGroup}>
                            <View style={styles.radioButton}>
                               <RadioButton.Android
                                value="1"
                                status={selectedValue == "1" ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedValue('1')}
                                color="orange"
                                />
                                <Text style={styles.radioLabel}>Cat</Text>
                            </View>

                            <View style={styles.radioButton}>
                               <RadioButton.Android
                                value="2"
                                status={selectedValue == "2" ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedValue('2')}
                                color="orange"
                                />
                                <Text style={styles.radioLabel}>Dog</Text>
                            </View>

                            <View style={styles.radioButton}>
                               <RadioButton.Android
                                value="3"
                                status={selectedValue == "3" ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedValue('3')}
                                color="orange"
                                />
                                <Text style={styles.radioLabel}>Other</Text>
                            </View>
                        </View>
                    </View>

                </View>
                 </View>

                 
                 
               

                 


                     

                </ScrollView>
            </SafeAreaView>
        </View>

    )

}

export default MainScreen;