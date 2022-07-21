import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// components
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const name = 'Gustavo Talamini';

const list = [
  {
    id: 1,
    label: 'Conta Luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0, // despesas
  },
  {
    id: 2,
    label: 'Pix',
    value: '5.300,90',
    date: '06/06/2022',
    type: 1, // receita
  },
  {
    id: 3,
    label: 'Salario',
    value: '15.200,00',
    date: '06/06/2022',
    type: 1, // receita
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={name} />
      <Balance saldo="350.257,88" gastos="-5.227,00" />

      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
