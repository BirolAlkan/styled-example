import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
const style ={
  colors:{
    header:{
      header: "#fff",
      body:"#fff",
      footer: "#8A1C4A",
    },
    margins:{},
    responsive: '724px',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={style} >
      <Header/>
    </ThemeProvider>
  );
};

export default App;
