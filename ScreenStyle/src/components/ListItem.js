import React from 'react'
import {Image,View,Text,StyleSheet} from 'react-native'


const ListItem = props =>{
    
    return(
        <View style={{marginBottom: 15}}>
               
                <View >

                  <Image style={styles.imageStyle} source={{uri : props.ListData.image }}/>
                
                </View>
                
                <View style={styles.container}> 
                  
                    <View style={styles.infoView}>
                      
                        <View style={styles.infoName}>
                          
                            <Text style={[ styles.textStyle ],{ fontSize : 20} }>{props.ListData.name}</Text>
                            <Text style={[styles.textStyle] , { fontSize:15 }}>{props.ListData.location}</Text>
                        
                        </View>
                        { props.ListData.isPopular &&
                        <View style={styles.fireView}>
                        
                            <Image style={styles.icons} source ={require('../icon/fire.png')}/>
                        
                        </View>
                        }
                   
                    </View> 
                   
                    <View style={styles.infoLike}>
                      
                      <Image style={styles.icons} source = {require('../icon/heart.png')} /> 
                      <Text style={[styles.textStyle],{fontSize : 20 }}>{props.ListData.likes}</Text>
                   
                    </View>

                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle : {
         width: '100%',
         height: 200,
        resizeMode : 'stretch' 
    },
        container : { 
        backgroundColor: '#fffde7',
        alignItems : 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal : 5,
        borderBottomEndRadius:25,
        borderBottomStartRadius : 25,
        borderWidth : 3 ,
        borderColor : '#cccab5',
        borderTopColor:'#fffde7'
    },
    textStyle : {
        fontStyle:'italic'
    },
    infoView : {
        flexDirection:'row',
        alignItems:'center',
        marginLeft : 10
    },
    infoName : {
        flexDirection:'column',
        justifyContent:'center'
    },
    fireView : {
        alignItems : 'flex-start'
    },
    infoLike : {
        flexDirection:'row-reverse',
        alignItems : 'center'
    },
    icons : {
        resizeMode:'center'
    }


})
export default ListItem