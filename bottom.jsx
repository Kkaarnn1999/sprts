
import React from "react";
import Spt from "./top"

function App () {
return (
<div>
  <h1 className="heading">Famous sports persons !!!</h1>

  <Spt 
    Name= "Name: Eugenie Bouchard"
    Cry = "Country: CANADA"
    Dis= "Discipline: Tennis"
    Year= "Year Borne: 25 February 1994"
    Prize= "Prize Money: $6,731,393"
    Pic= "https://www.sportsnet.ca/wp-content/uploads/2021/03/Eugenie-Bouchard.jpg"
  />  

  <Spt 
    Name= "Name: Paige Spiranac"
    Cry = "Country: USA"
    Dis= "Discipline: Golf"
    Year= "Year Borne: 26 March 1993"
    Prize= "Prize Money: $3,000,000"
    Pic= "https://i.pinimg.com/736x/eb/87/6f/eb876fa27d66001fc98c4caea8e89fbd.jpg"
  />    

  <Spt 
    Name= "Name: Antonija  Sandric"
    Cry = "Country: CROATIA"
    Dis= "Discipline: Basketball"
    Year= "Year Borne: 19 May 1988"
    Prize= "Prize Money: $1,000,000"
    Pic= "https://rm.id/images/berita/750x390/antonija-sandric-ogah-jadi-model_40163.jpg"
  />   

  <Spt 
    Name= "Name: Allison Stokke"
    Cry = "Country: USA"
    Dis= "Discipline: Athletics (Pole Vault)"
    Year= "Year Borne: 22 March 1989"
    Prize= "Prize Money: $5,000,000"
    Pic= "https://thegolfnewsnet.com/wp-content/uploads/2017/04/alison-stokke-3.jpg"
  />   

  <Spt 
    Name= "Name: Ana Ivanović"
    Cry = "Country: SERBIA"
    Dis= "Discipline: Tennis"
    Year= "Year Borne: 6 November 1987"
    Prize= "Prize Money: US$15,510,787"
    Pic= "http://d3e1m60ptf1oym.cloudfront.net/4e04cc7d-8d22-4f7d-94cc-6716d8e553ec/DSC_1776_xgaplus.jpg"
  />   

  </div>
  );
}

export default App;