import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import OrderDetails from "./screens/OrderDetails";
import PlannerMensal from "./screens/PlannerMensal";
import Home from "./screens/Home";
import GastosCartao from "./screens/GastosCartao";
import RegisterGastosCartao from "./screens/RegisterGastosCartao";
import RegisterGastosResidenciais from "./screens/RegisterGastosResidenciais";
import GastosResidenciais from "./screens/GastosResidenciais";
import RegisterDividas from "./screens/RegisterDividas";
import DividasPendentes from "./screens/DividasPendentes";
import RegisterGastosAniversariantes from "./screens/RegisterGastosAniversariantes";
import RegisterGastosFamiliar from "./screens/RegisterGastosFamiliar";
import GastosFamiliares from "./screens/GastosFamiliares";
import GastosAniversariantes from "./screens/GastosAniversariantes";
import RegisterBensMateriais from "./screens/RegisterBensMateriais";
import BensMateriais from "./screens/BensMateriais";
import PlanilhaMercado from "./screens/PlanilhaMercado";
import RegisterPlanilhaMercado from "./screens/RegisterPlanilhaMercado";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterObjetivosFinanceiros from "./screens/RegisterObjetivosFinanceiros";
import ObjetivosFinanceiros from "./screens/ObjetivosFinanceiros";
import RegisterReceitasMensais from "./screens/RegisterReceitasMensais";
import RegisterGastosEmergenciais from "./screens/RegisterGastosEmergenciais";
import GastosEmergenciais from "./screens/GastosEmergenciais";
import Desafio52Semanas from "./screens/Desafio52Semanas";
import RegisterMetodo502030 from "./screens/RegisterMetodo502030";
import Metodo502030 from "./screens/Metodo502030";
import RegisterPlannerViagens from "./screens/RegisterPlannerViagens";
import ReceitasMensais from "./screens/ReceitasMensais";
import DetailsDiaria from "./screens/DetailsDiaria";
import EditProfile from "./screens/EditProfile";
import UserProfile from "./screens/UserProfile";
import GastosViagens from "./screens/GastosViagens";
import { FontFamily } from "./GlobalStyles";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded] = useFonts({
    [FontFamily.interSemiBold]: require("./assets/fonts/Inter-SemiBold.ttf"),
    [FontFamily.vigaRegular]: require("./assets/fonts/Viga-Regular.ttf"),
    [FontFamily.bentonSansMedium]: require("./assets/fonts/bentonsans-medium.otf"),
    [FontFamily.bentonSansBold]: require('./assets/fonts/BentonSans Bold.otf'),
    [FontFamily.bentonSansRegular]: require("./assets/fonts/bentonsans-regular.otf"),
    [FontFamily.montserratSemiBold]: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setHideSplashScreen(true);
      }, 7800); // Aguarda 3 segundos antes de esconder a tela de splash
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Retorna null enquanto as fontes não carregam
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!hideSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
        ) : (
          <>
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderDetails"
              component={OrderDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlannerMensal"
              component={PlannerMensal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterGastosCartao"
              component={RegisterGastosCartao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GastosCartao"
              component={GastosCartao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterGastosResidenciais"
              component={RegisterGastosResidenciais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GastosResidenciais"
              component={GastosResidenciais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterDividas"
              component={RegisterDividas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DividasPendentes"
              component={DividasPendentes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterGastosAniversariantes"
              component={RegisterGastosAniversariantes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GastosAniversariantes"
              component={GastosAniversariantes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterGastosFamiliar"
              component={RegisterGastosFamiliar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GastosFamiliares"
              component={GastosFamiliares}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterBensMateriais"
              component={RegisterBensMateriais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BensMateriais"
              component={BensMateriais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanilhaMercado"
              component={PlanilhaMercado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterPlanilhaMercado"
              component={RegisterPlanilhaMercado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterObjetivosFinanceiros"
              component={RegisterObjetivosFinanceiros}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ObjetivosFinanceiros"
              component={ObjetivosFinanceiros}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterReceitasMensais"
              component={RegisterReceitasMensais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReceitasMensais"
              component={ReceitasMensais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterGastosEmergenciais"
              component={RegisterGastosEmergenciais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GastosEmergenciais"
              component={GastosEmergenciais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Desafio52Semanas"
              component={Desafio52Semanas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterMetodo502030"
              component={RegisterMetodo502030}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Metodo502030"
              component={Metodo502030}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterPlannerViagens"
              component={RegisterPlannerViagens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailsDiaria"
              component={DetailsDiaria}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GastosViagens"
              component={GastosViagens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
