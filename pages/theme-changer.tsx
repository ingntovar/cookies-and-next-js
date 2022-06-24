import { ChangeEvent, useEffect, useState } from "react";

import Layout from "../components/layouts/Layout"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio";
import Cookies  from "js-cookie";


const ThemeChangerPage = () => {

  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChange = ( e : ChangeEvent<HTMLInputElement> ) => {

    const selectedTheme = e.target.value
    setCurrentTheme(selectedTheme)

    localStorage.setItem('theme', selectedTheme)
    Cookies.set('theme', selectedTheme)
  }

  useEffect(() => {
    
    console.log(localStorage.getItem('theme'));
    
    
  }, [])
  


  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup
              value = {currentTheme}  
              onChange = { onThemeChange }
            >
              <FormControlLabel 
                value = 'light'
                control= { <Radio/>}
                label = 'Light'
              />
              <FormControlLabel 
                value = 'dark'
                control= { <Radio/>}
                label = 'Dark'
              />
              <FormControlLabel 
                value = 'custom'
                control= { <Radio/>}
                label = 'Custom'
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default ThemeChangerPage
