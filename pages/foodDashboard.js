import React, {useState} from "react";
import { ScrollView, View, Text, StyleSheet, Touchable, TouchableOpacity} from "react-native";
import LocationCard from "../components/LocationCard";
import {Shadow} from 'react-native-shadow-2';  
import Profile from './../assets/profile.svg'
import ShopCard from './../components/Shopcard'
import canteen from './../assets/canteen.png'
import FoodCard from './../components/FoodCard'
import Pizza from './../assets/pizza.png'
import Edit from './../assets/edit.svg'
import FoodCard2 from "../components/FoodCard2";
import Omelette from "./../assets/omelette.png"
import Shake from '../assets/shake.png'
import Maggie from '../assets/maggi.png'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/Navbar'
import Header from '../components/header'
import SmallShopCard from "../components/smallShopCard";
import Recommended from './../components/recommended'
import bg from './../assets/recdummy.png'
import { useNavigation } from "@react-navigation/native";
const Dash=({})=>{
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
        <ScrollView  style={styles.main}>
            <View style={styles.up}>
                <Header text="Order with ease" />
                <SearchBar textInput="Search here for restauran, food, etc"/>
            </View>
            <View style={styles.down}>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Locations Across Campus
                        </Text>
                </View>
                <View style={styles.choice}>
                    <TouchableOpacity style={styles.wrapper2} onPress={()=>{navigation.navigate("Canteen");}}>
                    <LocationCard text='Canteen'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper2} onPress={()=>{navigation.navigate("Khoka");}}>
                    <LocationCard text='Khoka'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper2} onPress={()=>{navigation.navigate("MarketComplex");}}>
                    <LocationCard text='Market Complex'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper2} onPress={()=>{navigation.navigate("FoodCourt");}}>
                    <LocationCard text='Food Court'/>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Your Favorites
                        </Text>
                        {!isVisible ? 
                            <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
                                <View style={styles.edit}>
                                    <Edit/> 
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={styles.options}>
                                <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
                                    <View style={styles.op1}>
                                        <Text style={styles.editText1}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
                                    <View style={styles.op2}>
                                        <Text style={styles.editText2}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                </View>
                <View style={styles.food}>
                    <ScrollView horizontal={true} style={styles.food1}>
                    <TouchableOpacity style={styles.wrapper3}>
                        <FoodCard2 heading1="Bread Omelette" image={Omelette}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper3}>
                        <FoodCard2 heading1="Ore Shake" image={Shake}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper3}>
                        <FoodCard2 heading1="Ore Shake" image={Shake}/>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Places You Love
                        </Text>
                        <Edit/>
                </View>

                <View style={styles.placeYouLove}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("FoodShop");}}>
                        <SmallShopCard rating="4.5" img={canteen} dist="200m" line2="Snacks-Multi Cuisine" line1="Brahma Food Center"/>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={()=>{navigation.navigate("FoodShop");}}>
                        <SmallShopCard rating="4.5" img={canteen} dist="200m" line2="Snacks-Multi Cuisine" line1="Brahma Food Center"/>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{navigation.navigate("FoodShop");}}>
                        <SmallShopCard rating="4.5" img={canteen} dist="200m" line2="Snacks-Multi Cuisine" line1="Brahma Food Center"/>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{navigation.navigate("FoodShop");}}>
                        <SmallShopCard rating="4.5" img={canteen} dist="200m" line2="Snacks-Multi Cuisine" line1="Brahma Food Center"/>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Recommended
                        </Text>
                </View>
                <View style={styles.rec}>
                    <View style={{width:'45%'}}>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    </View>
                    <View style={{width:'45%'}}>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    </View>
                    <View style={{width:'45%'}}>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    </View>
                    <View style={{width:'45%'}}>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    </View>
                </View>
                
                
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Explore Places
                        </Text>
                </View>
                <View style={styles.nearYou}>
                <TouchableOpacity style={styles.wrapper4} onPress={()=>{navigation.navigate("FoodShop");}}>
                    <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper4} onPress={()=>{navigation.navigate("FoodShop");}}>
                    <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        </ScrollView>
        <View style={{position:'absolute', bottom:0, width:'100%', height:68}}>
                <NavBar active="Food"/>
        </View>
        </View>
    );
}

export default Dash

const styles = StyleSheet.create({
    up:{
        backgroungColor:'#5736B5',
        height:180,
        width:"100%",
        zIndex:2,
        flexDirection:'column',
        alignItems:'center',
    },
    shadow:{
        marginBottom:20,
        borderRadius:16,
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:64
    },
    main:{
        backgroundColor:'#5736B5',
        height:"100%",
        width:"100%",
    },
    mainContainer:{
        width:"100%",
        height:"100%"
    },
    head:{
        marginTop:48,
        marginLeft:24,
        marginRight:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    edit:{
        paddingRight:8,
    },
    options:{
        flexDirection:'row',
    },
    op1:{
        width:70,
        height:28,
        borderRadius:16,
        backgroundColor:'#EEEDFA',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#D7D2E9',
    },
    op2:{
        width:56,
        height:28,
        borderRadius:16,
        backgroundColor:'#5736B5',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:8,
    },
    editText1:{
        color:'#8A8297',
        fontSize:14,
        fontWeight:500,
    },
    editText2:{
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:500,
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    headTex:{
        fontSize:20,
        fontWeight:500,
        color:'white',
    },
    wrapper:{
        height:204,
        width:"90%",
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:16,
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    LinkText:{
        color:'#5736B5',
        fontSize:14,
        fontWeight:500,
    },
    subHead:{
        width:"100%",
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
        alignItems:'center',
        paddingLeft:24,
        paddingRight:16,
    },
    nearYou:{
        width:"100%",
        height:"100%",
        flexDirection:'column',
        alignItems:'center',
    },
    choice:{
        width:"100%",
        height:238,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:25,
        paddingRight:25,
        flexWrap:'wrap'
    },
    wrapper2:{
        borderRadius:16,
        height: 96,
        width: "46%",
        marginBottom:16,
    },
    food:{
        height:138,
        width:"100%",
        
    },
    wrapper3:{
        borderRadius:16,
        height:110,
        width:110,
        marginRight:10,
        marginLeft:10
    },
    placeYouLove:{
        height:269,
        width:"100%",
        flexDirection:'row',
    },
    wrapper4:{
        width: 236, 
        height: 230, 
        backgroundColor: "#FFFFFF", 
        borderRadius: 16, 
    },
    shadow2:{
        width: 236, 
        height: 230, 
        marginTop: 17,
        marginBottom: 32,
        marginRight: 16,
        marginLeft: 16,
        borderRadius:6,
    },
    rec:{
        height:416,
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center'
    },
    wrapper4:{
        width:"100%",
        justifyContent:"center",
        flexDirection:"row"
        }
})