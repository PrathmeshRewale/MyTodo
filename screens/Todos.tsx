import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Todo from '../components/Todo'
import { FlashList } from "@shopify/flash-list";
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Todos = () => {

    const [todos, setTodos] = React.useState([])
    const [itenssize, setItenssize] = React.useState(200)


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos') // fetch todos from jsonplaceholder
            .then(response => response.json())
            .then(data => setTodos(data))

            if (todos.length > 0) {
                setItenssize(todos.length )                
            }

    }, []);

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.inline} >
           <View>
           <Text style={styles.heading}>Todos</Text>
            <Text style={styles.subheading}> {todos.length} </Text>
           </View>
            <AntDesign name="pluscircleo" size={30} color="#6DC5D1" onPress={() => Alert.alert("Create New Todo")} />
            </View>
            <FlashList
                data={todos}
                renderItem={({ item }: { item: { title: string, completed: boolean, id:number } }) => <Todo id={item.id} title={item.title} completed={item.completed} />}
                estimatedItemSize={itenssize}
            />
            

        </SafeAreaView>
    )
}

export default Todos

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'red',
    },
    safearea: {
        backgroundColor: '#0d0d0d',
        height: '100%',
    },
    heading: {
        color: 'white',
        fontSize: 24,
        textAlign: 'left',
        marginTop: 20,
        paddingLeft: 20,
        marginBottom: 0,

    },
    subheading: {
        color: 'white',
        fontSize: 15,
        textAlign: 'left',
        marginTop: 5,
        paddingLeft: 20,
        marginBottom: 20,

    },
inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0d0d0d',
    
}
})