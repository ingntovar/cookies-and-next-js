import { ChangeEvent, FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import Layout from "../components/layouts/Layout"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

import Cookies  from "js-cookie";
import axios from "axios";

interface Props {
  theme: string
}


const ThemeChangerPage: FC<Props> = ( { theme } ) => {

  console.log(theme);
  

  const [currentTheme, setCurrentTheme] = useState(theme)

  const onThemeChange = ( e : ChangeEvent<HTMLInputElement> ) => {

    const selectedTheme = e.target.value
    setCurrentTheme(selectedTheme)

    localStorage.setItem('theme', selectedTheme)
    Cookies.set('theme', selectedTheme)
    setTimeout(() => {
      location.reload()
    }, 300);
  }

  const handleClick = async () => {
    const {data} = await axios.get('/api/hello')
    console.log(data)
    
  }

  useEffect(() => {
    console.log(localStorage.getItem('theme'));
    console.log( 'Cookies: ', Cookies.get('theme') );
    


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

          <Button
            onClick={handleClick}
          >
            Request
          </Button>

        </CardContent>
      </Card>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async({ req }) => {

  const { theme = 'light' , name = 'noname' } = req.cookies
  
  const validThemes = ['light', 'dark', 'custom']
  const theTheme = validThemes.includes( theme ) ? theme : 'dark'

  

  return {
    props: {
      theme : theTheme,
      name
    }
  }
}

export default ThemeChangerPage
