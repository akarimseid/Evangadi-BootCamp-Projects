import IncreaseDecreaseCount from './Components/Hooks/IncreaseDecreaseCount'
import PasswordToggle from './Components/Hooks/PasswordToggle'
import ThemeToggle from './Components/Hooks/ThemeToggle'
import UseEffectForTitle from './Components/Hooks/UseEffectForTitle'
import MyCounter from './Components/States/MyCounter'



function App() {
  return (
    <>
  
  <MyCounter/>

   {/* hooks questions components renders from here */}
   <IncreaseDecreaseCount/>
   <br />
  <ThemeToggle/>
  <br />
  <PasswordToggle/>
  <br />
  <UseEffectForTitle/>
  </>
  )
}

export default App