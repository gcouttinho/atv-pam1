import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./views/Splash";
import Home from "./views/Home";
import Cadastro from "./views/Cadastro";
import Perfil from "./views/Perfil";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil}/>
{/*           options={{
            headerLeft: () => null, // Remova o botão de voltar padrão
            gestureEnabled: false, // Desative o gesto de retorno
          }} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
