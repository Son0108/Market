import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import StickyContainer from 'recyclerlistview/sticky';

export default class StickySample extends React.Component {

    constructor(props) {
        super(props);
       this.state = {
        dataProvider: new DataProvider((r1, r2) => {return r1 !== r2})
       }
    }

    layoutProvider = new LayoutProvider((index) => {
        return index;
    }, (type, dim) => {
        dim.width = Dimensions.get('window').width;
        dim.height = 50;
    })

    rowRenderer = ( item) => {
        return (
            <View style={{height: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 32}}>{item}</Text>
            </View>
        );
    };

    render() {
        return (
            <StickyContainer stickyHeaderIndices={[3]}>
                <RecyclerListView layoutProvider={this.layoutProvider}
                                  dataProvider={this.state.dataProvider} 
                                  rowRenderer={this.rowRenderer} 
                                  showsVerticalScrollIndicator={false}/>
            </StickyContainer>
        );
    }
}